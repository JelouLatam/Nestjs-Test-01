import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'El único identificador de la tarea',
  })
  id: number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Comprar Comida semanal',
    description: 'El nombre de la tarea',
  })
  task: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Comprar todos los ingredientes necesarios para la semana',
    description: 'Descripción detallada de la tarea',
  })
  description: string;

  @Column({ default: 'admin' }) // El usuario de creación siempre será 'admin' para esta prueba
  createUser: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  updateDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  completeDate: Date;

  @Column({ default: false })
  @ApiProperty({
    example: false,
    description: 'Indica si la tarea ha sido completada o no',
  })
  isCompleted: boolean;

  @BeforeInsert()
  setCreateDate() {
    this.createDate = new Date(); // Asignar la fecha de creación automáticamente
  }

  @BeforeUpdate()
  setUpdateDate() {
    this.updateDate = new Date(); // Asignar la fecha de actualización automáticamente
    // Asignar la fecha de finalización cuando isCompleted es true
    if (this.isCompleted) {
      this.completeDate = new Date();
    } else {
      this.completeDate = null;
    }
  }
}
