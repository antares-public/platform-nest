import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be a string' })
  @ApiProperty({ example: 'USER', description: 'Название роли' })
  readonly value: string;
  @IsNumber({}, { message: 'Must be a number' })
  @ApiProperty({ example: '1', description: 'ID Пользователя' })
  readonly userId: number;
}
