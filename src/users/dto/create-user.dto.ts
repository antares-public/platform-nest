import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый ящик' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email address' })
  readonly email: string;
  @ApiProperty({ example: 'Пароль', description: 'Пароль' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Not less than 4 and not more than 16' })
  readonly password: string;
}
