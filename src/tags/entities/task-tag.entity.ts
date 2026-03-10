import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskTag {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  taskId!: string;

  @Column()
  tagId!: string;
}
