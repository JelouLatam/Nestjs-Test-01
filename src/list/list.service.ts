import { Injectable } from '@nestjs/common';
import { ToDo_List } from './list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUpdateListDto } from './dto/createUpdateListDTO';
import { plainToInstance, plainToClass } from 'class-transformer';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(ToDo_List)
        private listsRepository: Repository<ToDo_List>,
    ) { }

    create(createListDto: CreateUpdateListDto): Promise<ToDo_List> {
        const dto = plainToInstance(ToDo_List, createListDto);
        const newList = this.listsRepository.create(dto);
        return this.listsRepository.save(newList);
    }

    async update(id: number, updateListDto: CreateUpdateListDto): Promise<ToDo_List> {
        const list = await this.listsRepository.findOne({ where: { id: id } });
        const dto = plainToInstance(ToDo_List, updateListDto);

        if (list) {
            list.title = dto.title;
            return this.listsRepository.save(list);
        }
    }

    findAll(): Promise<ToDo_List[]> {
        return this.listsRepository.find({ relations: ['tasks'] });
    }
    async delete(id: number): Promise<void> {
        await this.listsRepository.delete(id);
    }
}

