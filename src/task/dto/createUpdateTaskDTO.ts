import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber, IsInt } from 'class-validator';
import { ToDo_Task } from '../task.entity';

export class CreateUpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  createdAt: Date;

  @IsNotEmpty()
  @IsInt()
  listId: number;

}
