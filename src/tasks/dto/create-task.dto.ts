import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Title of the task', example: 'Buy milk' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the task',
    example: 'Buy milk from the store',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Status of the task',
    example: 'pending',
    enum: ['pending', 'in_progress', 'completed'],
  })
  @IsEnum(['pending', 'in_progress', 'completed'])
  status: 'pending' | 'in_progress' | 'completed';
}
