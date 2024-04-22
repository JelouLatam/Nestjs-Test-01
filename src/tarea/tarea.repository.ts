import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TareaEntity } from './tarea.entity';
import { TareaMapper } from './tarea.mapper';
import { TareaDTO } from './tarea.dto';
import { StatusEntity } from './status.entity';


@Injectable()
export class TareaRepository {

    constructor(
        private tareaRepository: Repository<TareaEntity>,
        private statusRepository: Repository<StatusEntity>,
        private mapper: TareaMapper
    ){}

    getAllTarea(): Promise<TareaEntity[]> {
        return this.tareaRepository.find();
    }

    getTareaByStatus(detail_status: string): Promise<TareaEntity> {
        const status= this.statusRepository.findOne({ detail_status })
        return this.tareaRepository.findOne(status['id'])
    }

    getTarearByName(detail_tarea: string): Promise<TareaEntity> {
        return this.tareaRepository.findOne({ detail_tarea });
    }

    newTarea(tareaDTO: TareaDTO): Promise<TareaEntity> {
        const newTarea = this.mapper.dtoToEntity(tareaDTO);
        return this.tareaRepository.save(newTarea);
    }

    async updateTarea(id: string, tareaDTO: TareaDTO): Promise<TareaEntity> {
        tareaDTO.id == +id;
        const updateTarea = this.mapper.dtoToEntity(tareaDTO);
        await this.tareaRepository.update(id, updateTarea);
        return this.tareaRepository.findOne(id);

    }

}