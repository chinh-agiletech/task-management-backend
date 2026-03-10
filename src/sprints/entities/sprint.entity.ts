import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Sprint {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  projectId!: string;

  @ManyToOne(() => Project, (project) => project.sprints)
  project!: Project;

  @Column({ type: 'date' })
  startDate!: Date;

  @Column({ type: 'date' })
  endDate!: Date;
}
