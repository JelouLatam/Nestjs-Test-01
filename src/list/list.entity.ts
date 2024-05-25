import { ToDo_Task } from "src/task/task.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class ToDo_List {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => ToDo_Task, task => task.listId)
    tasks: ToDo_Task[];
}