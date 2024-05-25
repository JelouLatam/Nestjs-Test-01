import { Injectable } from '@nestjs/common';
import { InjectRepository, getCustomRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo_Task } from './task.entity';
import { CreateUpdateTaskDto } from './dto/createUpdateTaskDTO';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(ToDo_Task)
        private taskRepository: Repository<ToDo_Task>
    ) { }

    findAll(): Promise<ToDo_Task[]> {
        return this.taskRepository.find();
    }

    create1(title: string, description: string) {
        const task = new ToDo_Task();
        task.title = title;
        task.description = description;
        return this.taskRepository.save(task);
    }

    create2(taskDto: any): Promise<ToDo_Task[]> {
        const task = this.taskRepository.create(taskDto);
        return this.taskRepository.save(task);
    }

    create(creatTaskDto: CreateUpdateTaskDto): Promise<ToDo_Task> {
        const dto = plainToInstance(ToDo_Task, creatTaskDto);
        const task = this.taskRepository.create(dto);
        return this.taskRepository.save(task);
    }

    async update(id: number, title: string, description: string = null, isCompleted: boolean = false) {
        const todo = await this.taskRepository.findOne({ where: { id: id } });

        if (todo) {
            todo.title = title;
            todo.description = description;
            todo.isCompleted = isCompleted;
            return this.taskRepository.save(todo);
        }
    }

    async completeTask(id: number) {
        const todo = await this.taskRepository.findOne({ where: { id: id } });

        if (todo) {
            todo.isCompleted = true;
            return this.taskRepository.save(todo);
        }
    }

    async assignList(id: number, listId: number) {
        const task = await this.taskRepository.findOne({ where: { id: id } });

        if (task) {
            task.isCompleted = true;
            return this.taskRepository.save(task);
        }
    }


    async delete(id: number) {
        await this.taskRepository.delete(id);
    }
}
