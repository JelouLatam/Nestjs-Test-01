import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  create(task: Task) {
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((task) => task.id == id);
  }

  update(id: number, task: Task) {
    const existingTask = this.findOne(id);
    if (existingTask) {
      Object.assign(existingTask, task);
    }
    return existingTask;
  }

  remove(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
