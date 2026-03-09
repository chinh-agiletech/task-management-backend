import { StatusTask } from '../entities/task.entity';

export interface FilterRequest {
  name?: string;
  statusTask?: StatusTask;
  userId?: string;
  orderBy?: 'ASC' | 'DESC';
}
