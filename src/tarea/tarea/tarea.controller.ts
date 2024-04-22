import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TareaService } from './tarea.service';
import { TareaDTO } from '../tarea.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tarea')
@ApiTags('Tarea')
export class TareaController {

    constructor(private tareaService: TareaService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getAllTarea(): Promise<TareaDTO[]> {
    return await this.tareaService.getAllTarea();
  }

  @Get('status/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getTareaByStatus(@Param('status') status: string): Promise<TareaDTO> {
    return await this.tareaService.getTareaByStatus(status);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async newTarea(@Body() tarea: TareaDTO): Promise<TareaDTO> {
    return await this.tareaService.newTarea(tarea);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id') id: string,
    @Body() tarea: TareaDTO
  ): Promise<TareaDTO> {
    return await this.tareaService.updateTarea(id, tarea);
  }

}
