import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Comprar Comida semanal',
    description: 'El nombre de la tarea.',
  })
  @IsNotEmpty()
  @IsString()
  task: string;

  @ApiProperty({
    example: 'Comprar todos los ingredientes necesarios para la semana.',
    description: 'Descripción detallada de la tarea.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: false,
    description: 'Indica si la tarea ha sido completada o no.',
  })
  @IsBoolean()
  isCompleted: boolean;
}
