/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum StatusTask {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: true })
  title!: string | null;

  @Column({ nullable: true })
  description!: string | null;

  @Column({ nullable: true })
  image!: string | null;

  @Column({ nullable: true })
  code!: string | null;

  @Column({ default: StatusTask.TODO })
  statusTask!: StatusTask;

  @Column({ nullable: true })
  userId!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
