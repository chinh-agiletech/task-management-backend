import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sprint } from '../../sprints/entities/sprint.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description!: string;

  @Column()
  ownerId!: string;

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  sprints!: Sprint[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
