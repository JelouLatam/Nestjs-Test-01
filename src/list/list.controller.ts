import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ListService } from './list.service';
import { ToDo_List } from './list.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateUpdateListDto } from './dto/createUpdateListDTO';

@ApiTags("Lists")
@Controller('lists')
export class ListController {
    constructor(private readonly listService: ListService) { }

    @Get()
    findAll() {
        return this.listService.findAll();
    }

    @Post()
    async create(@Body() list: CreateUpdateListDto): Promise<ToDo_List> {
        return await this.listService.create(list);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() list: CreateUpdateListDto) {
        return this.listService.update(id, list);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.listService.delete(id);
    }
}
