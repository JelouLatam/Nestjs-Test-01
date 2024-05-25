import { ToDo_List } from "src/list/list.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class ToDo_Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    isCompleted: boolean;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ManyToOne(() => ToDo_List, list => list.tasks)
    listId: number;
}