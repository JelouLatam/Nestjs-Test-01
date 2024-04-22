import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TareaEntity } from "./tarea.entity";

@Entity('status')
export class StatusEntity {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: 'varchar', nullable: true })
    detail_status: string;

    @OneToMany(()=> TareaEntity, tarea => tarea.id)
    tarea : TareaEntity[]

    constructor(id: number, detail: string) {
        
        this.id = id;
        this.detail_status= detail;
        
    }
}