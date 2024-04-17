import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Title of the task',
    example: 'Buy eggs',
  })
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'Description of the task',
    example: 'Buy eggs from the local store',
    required: false,
  })
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Status of the task',
    example: 'completed',
    enum: ['pending', 'in_progress', 'completed'],
  })
  @IsEnum(['pending', 'in_progress', 'completed'])
  @IsOptional()
  status?: 'pending' | 'in_progress' | 'completed';
}
