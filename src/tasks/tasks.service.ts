import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    // Create a nuew entity of task based on the dtio
    const newTask = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(newTask); // Guardar la nueva tarea en la base de datos
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updateResult = await this.taskRepository.update(id, updateTaskDto);
    if (!updateResult.affected) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.taskRepository.delete(id);
    if (!deleteResult.affected) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
