import { Injectable } from '@nestjs/common';
import { TareaRepository } from '../tarea.repository';
import { TareaMapper } from '../tarea.mapper';
import { TareaDTO } from '../tarea.dto';
import { TareaEntity } from '../tarea.entity';

@Injectable()
export class TareaService {

    constructor(
        private tareaRepository: TareaRepository,
        private mapper: TareaMapper
        ){}

    async getAllTarea(): Promise<TareaDTO[]> {
        const users: TareaEntity[] = await this.tareaRepository.getAllTarea()
        return users.map(user => this.mapper.entityToDto(user));
    }

    async getTareaByStatus(status: string): Promise<TareaDTO> {
        const tarea: TareaEntity = await this.tareaRepository.getTareaByStatus(status);
        return this.mapper.entityToDto(tarea);
    }

    async getTareaByName(name: string): Promise<TareaEntity> {
        return await this.tareaRepository.getTarearByName(name);
    }

    async newTarea(TareaDTO: TareaDTO): Promise<TareaDTO> {
        const newTarea: TareaEntity = await this.tareaRepository.newTarea(TareaDTO);
        return this.mapper.entityToDto(newTarea);
    }

    async updateTarea(id: string, TareaDTO: TareaDTO): Promise<TareaDTO> {
        const updateTarea = await this.tareaRepository.updateTarea(id, TareaDTO);
        return this.mapper.entityToDto(updateTarea);
    }

}
