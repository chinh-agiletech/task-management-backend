import { IsUUID, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  taskId!: string;

  @IsUUID()
  userId!: string;

  @IsString()
  content!: string;
}
