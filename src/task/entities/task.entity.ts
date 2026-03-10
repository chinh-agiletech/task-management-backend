/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Sprint } from 'src/sprints/entities/sprint.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum StatusTask {
  TODO = 1,
  IN_PROGRESS = 2,
  DONE = 3,
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: true })
  title!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  code!: string;

  @Column({ default: StatusTask.TODO })
  statusTask!: StatusTask;

  @Column({ nullable: true })
  userId!: string;

  @Column({ nullable: true })
  managermentId!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @ManyToOne(() => Sprint)
  sprint!: Sprint;
}
