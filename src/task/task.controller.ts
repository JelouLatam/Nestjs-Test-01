import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';
import { ToDo_Task } from './task.entity';
import { CreateUpdateTaskDto } from './dto/createUpdateTaskDTO';

@ApiTags("Tasks")
@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Post('create1')
    create1(@Body('title') title: string, @Body('description') description: string) {
        return this.taskService.create1(title, description);
    }
    @Post('create2')
    async create2(@Body() task: any): Promise<ToDo_Task[]> {
        return await this.taskService.create2(task);
    }

    @Post()
    async create(@Body() createTaskDto: CreateUpdateTaskDto): Promise<ToDo_Task> {
        return await this.taskService.create(createTaskDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body('title') title: string, @Body('description') description: string, @Body('isCompleted') isCompleted: boolean) {
        return this.taskService.update(id, title, description, isCompleted);
    }

    @Put(':id/complete')
    completeTask(@Param('id') id: number) {
        return this.taskService.completeTask(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.taskService.delete(id);
    }

}
