import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todas las tareas' })
  @ApiResponse({
    status: 200,
    description: 'Retorna todas las tareas.',
    type: [Task],
  })
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene tarea por id' })
  @ApiResponse({
    status: 200,
    description: 'Retorna tarea por id.',
    type: Task,
  })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea una nueva tarea' })
  @ApiResponse({
    status: 201,
    description: 'La tarea ha sido creada satisfactoriamente.',
    type: Task,
  })
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza tarea por id' })
  @ApiResponse({
    status: 200,
    description: 'La tarea ha sido actualizada satisfactoriamente.',
    type: Task,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(+id, createTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina tarea por id' })
  @ApiResponse({
    status: 200,
    description: 'La tarea ha sido eliminada satisfactoriamente.',
  })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
