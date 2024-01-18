import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tasks')
export class Task {
  @ApiProperty({ description: 'ID of the task' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Title of the task' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Description of the task' })
  @Column()
  description: string;

  @ApiProperty({ description: 'Date when the task was created' })
  @Column()
  creationDate: Date;

  @ApiProperty({ description: 'Date when the task was last modified' })
  @Column()
  updateDate: Date;

  @ApiProperty({ description: 'Date when the task must be completed' })
  @Column()
  dueDate: Date;
}
