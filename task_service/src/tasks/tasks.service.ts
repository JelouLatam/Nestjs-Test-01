import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    // Verificar si la tarea ya existe para no duplicarla
    const exist_task = await this.tasksRepository.findOne({
      where: { task: createTaskDto.task },
    });
    if (exist_task) {
      throw new NotFoundException(
        'No se aceptan tareas repetidas para este proyecto',
      );
    }

    const task = this.tasksRepository.create(createTaskDto); // Crear una nueva instancia de Task a partir del DTO

    // Establecer valores automáticos
    task.createUser = 'admin'; // Establecer 'admin' como usuario creador de la tarea
    task.createDate = new Date(); // Asignar fecha de creación de la tarea

    return await this.tasksRepository.save(task); // Guardar la tarea
  }

  async update(id: number, updateTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException('La Tarea no fue encontrada');
    }

    // Actualizar los valores desde el DTO
    Object.assign(task, updateTaskDto);

    // Establecer la fecha de actualización
    task.updateDate = new Date();

    // Si la tarea se marca como completada, establecer la fecha de completado
    if (task.isCompleted) {
      task.completeDate = new Date();
    } else {
      task.completeDate = null;
    }

    return await this.tasksRepository.save(task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
