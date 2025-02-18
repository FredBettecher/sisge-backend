import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRoleDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
