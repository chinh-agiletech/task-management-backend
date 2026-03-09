import { IsString, IsOptional, IsEnum, IsUUID } from 'class-validator';
import { StatusTask } from '../entities/task.entity';

export class CreateTaskDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsEnum(StatusTask)
  statusTask?: StatusTask;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  managermentId?: string;
}
