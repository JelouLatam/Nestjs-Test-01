import { IsNotEmpty, IsDateString, MaxLength, Validate } from 'class-validator';
import { NoPreviousDates } from 'src/validators/noPreviousDates';
import { NoWhitespaceString } from 'src/validators/noWhitespaceString';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description:
      'Title of the task. Should be a non-empty string, otherwise is not a valid value',
  })
  @IsNotEmpty()
  @MaxLength(30)
  @Validate(NoWhitespaceString)
  title: string;

  @ApiProperty({
    description:
      'Description of the task. Should be a non-empty string, otherwise is not a valid value',
  })
  @IsNotEmpty()
  @Validate(NoWhitespaceString)
  description: string;

  @ApiProperty({
    description:
      'Date when the task must be completed. Should be a date string with the following format: yyyy-mm-dd, otherwise is not a valid value',
  })
  @IsNotEmpty()
  @IsDateString()
  @Validate(NoPreviousDates)
  dueDate: Date;
}
