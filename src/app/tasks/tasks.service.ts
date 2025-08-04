import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
    { id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary of Task 1',
      dueDate: '01-08-2025'
    },
    { id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'Summary of Task 2',
      dueDate: '01-08-2025'
    },
    { id: 't3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'Summary of Task 3',
      dueDate: '01-08-2025'
    },
    { id: 't4',
      userId: 'u4',
      title: 'Task 4',
      summary: 'Summary of Task 4',
      dueDate: '01-08-2025'
    },
    { id: 't5',
      userId: 'u5',
      title: 'Task 5',
      summary: 'Summary of Task 5',
      dueDate: '01-08-2025'
    },
    { id: 't6',
      userId: 'u6',
      title: 'Task 6',
      summary: 'Summary of Task 6',
      dueDate: '01-08-2025'
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }

  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}