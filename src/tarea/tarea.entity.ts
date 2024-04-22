import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusEntity } from "./status.entity";

@Entity('tarea')
export class TareaEntity {

    @PrimaryGeneratedColumn("increment")
    readonly id: number;

    @Column({ type: 'varchar', nullable: true })
    detail_tarea: string;

    @ManyToOne(()=>StatusEntity, status => status.id ,{
        eager: true,
        cascade: true
      })
      public status:StatusEntity;

    constructor(id: number, detail: string,  status: any) {
    
        this.id = id;
        this.detail_tarea = detail;
        this.status = status;
        
      }
}