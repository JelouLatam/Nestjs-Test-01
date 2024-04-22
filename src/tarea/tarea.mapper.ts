import { Injectable } from "@nestjs/common";
import { TareaDTO } from "./tarea.dto";
import { TareaEntity } from "./tarea.entity";


@Injectable()
export class TareaMapper {

    dtoToEntity(tareaDTO: TareaDTO): TareaEntity {
        return new TareaEntity(tareaDTO.id, tareaDTO.detail_tarea, tareaDTO.status);
    }

    entityToDto(tareaEntity: TareaEntity): TareaDTO {
        return new TareaDTO(tareaEntity.id, tareaEntity.detail_tarea, tareaEntity.status);
    }

}