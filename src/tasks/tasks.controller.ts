import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { GenericErrorResponse } from 'src/swagger/genericErrorResponse';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Creates a task and adds it to the TO-DO list.' })
  @ApiCreatedResponse({
    description: 'Task was created succesfully.',
    type: Task,
  })
  @ApiBadRequestResponse({
    description: 'Request body is malformed/incorrect.',
    type: GenericErrorResponse,
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Get all tasks from the TO-DO list.' })
  @ApiOkResponse({
    type: Task,
    isArray: true,
  })
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @ApiOperation({
    summary: 'Get one task from the TO-DO list, specified by the task id.',
  })
  @ApiOkResponse({
    description: 'Task found.',
    type: Task,
  })
  @ApiNotFoundResponse({
    description: 'Task with the specified ID was not found.',
    type: GenericErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @ApiOperation({ summary: 'Updates the task with the specified ID.' })
  @ApiOkResponse({
    description: 'Task updated. Returns the updated task.',
    type: Task,
  })
  @ApiBadRequestResponse({
    description:
      'Request body is malformed/incorrect or has validation errors.',
    type: GenericErrorResponse,
  })
  @ApiNotFoundResponse({
    description: 'Task with the specified ID was not found.',
    type: GenericErrorResponse,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Deletes the task with the specified ID.' })
  @ApiOkResponse({
    description: 'Task deleted successfully. Returns the deleted task.',
    type: Task,
  })
  @ApiNotFoundResponse({
    description: 'Task with the specified ID was not found.',
    type: GenericErrorResponse,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Task> {
    return this.tasksService.remove(+id);
  }
}
