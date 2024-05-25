import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ToDo_Task } from 'src/task/task.entity';

export class CreateUpdateListDto {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  tasks: ToDo_Task[];
}