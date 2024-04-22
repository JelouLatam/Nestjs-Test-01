import { Module } from '@nestjs/common';
import { TareaService } from './tarea/tarea.service';
import { TareaController } from './tarea/tarea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';
import { StatusEntity } from './status.entity';
import { TareaMapper } from './tarea.mapper';
import { TareaRepository } from './tarea.repository';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TareaEntity,StatusEntity])
  ],
  providers: [TareaService, TareaMapper, TareaRepository, Repository],
  controllers: [TareaController],
  exports: [TareaService]
})
export class TareaModule {}
