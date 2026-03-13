import { IsUUID, IsString, IsDateString } from 'class-validator';

export class CreateSprintDto {
  @IsString()
  title!: string;

  @IsUUID()
  projectId!: string;

  @IsDateString()
  startDate!: Date;

  @IsDateString()
  endDate!: Date;
}
