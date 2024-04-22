import { ApiProperty } from "@nestjs/swagger";

export class TareaDTO {
    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    detail_tarea: string;

    @ApiProperty()
    status: any;

    constructor(id: number, detail: string, status:any) {
        this.id = id;
        this.detail_tarea = detail;
        this.status = status;
    }
}