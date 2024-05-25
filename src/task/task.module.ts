import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ToDo_Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo_Task])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule { }
