import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskToSave = this.taskRepository.create(createTaskDto);
    taskToSave.title.trim();
    taskToSave.description.trim();
    taskToSave.creationDate = new Date();
    taskToSave.updateDate = new Date();
    return this.taskRepository.save(taskToSave);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const singleTask = await this.taskRepository.findOneBy({ id: id });
    if (!singleTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return singleTask;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const taskToUpdate = await this.taskRepository.findOneBy({ id: id });
    if (!taskToUpdate) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    Object.assign(taskToUpdate, updateTaskDto);
    taskToUpdate.updateDate = new Date();
    return this.taskRepository.save(taskToUpdate);
  }

  async remove(id: number): Promise<Task> {
    const taskToDelete = await this.taskRepository.findOneBy({ id: id });
    if (!taskToDelete) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return this.taskRepository.remove(taskToDelete);
  }
}
