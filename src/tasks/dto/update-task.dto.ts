import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNotEmpty, IsDateString, MaxLength, Validate } from 'class-validator';
import { NoPreviousDates } from 'src/validators/NoPreviousDates';
import { NoWhitespaceString } from 'src/validators/NoWhitespaceString';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ description: 'Title of the task. If provided, it should be a non-empty string, otherwise is not a valid value' })
  @IsNotEmpty()
  @MaxLength(30)
  @Validate(NoWhitespaceString)
  title: string;

  @ApiProperty({ description: 'Description of the task. If provided, it should be a non-empty string, otherwise is not a valid value' })
  @IsNotEmpty()
  @Validate(NoWhitespaceString)
  description: string;

  @ApiProperty({ description: 'Date when the task must be completed. If provided, it should be a date string with the following format: yyyy-mm-dd, otherwise is not a valid value' })
  @IsDateString()
  @Validate(NoPreviousDates)
  dueDate: Date;
}
