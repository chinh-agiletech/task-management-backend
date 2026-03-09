/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;

  @IsString()
  code!: string;
}
