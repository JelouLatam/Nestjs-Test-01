import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The task has been successfully created.',
    type: CreateTaskDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Failed to create task',
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      const newTask = await this.tasksService.create(createTaskDto);
      return newTask;
    } catch (error) {
      throw new HttpException('Failed to create task', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returned all tasks',
    type: [CreateTaskDto],
  })
  async findAll() {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve tasks',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task returned',
    type: CreateTaskDto,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.tasksService.findOne(+id);
    } catch (error) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task updated',
    type: UpdateTaskDto,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found' })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    try {
      return await this.tasksService.update(+id, updateTaskDto);
    } catch (error) {
      throw new HttpException(
        'Task not found or failed to update',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Task deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Task not found' })
  async remove(@Param('id') id: string) {
    try {
      await this.tasksService.remove(+id);
      return { status: HttpStatus.OK, message: 'Task deleted successfully' };
    } catch (error) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
