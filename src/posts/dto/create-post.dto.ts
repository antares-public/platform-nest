import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Must be a string' })
  @ApiProperty({ example: 'Test', description: 'Заголовок поста' })
  readonly title: string;
  @IsString({ message: 'Must be a string' })
  @ApiProperty({
    example: 'This is a test post',
    description: 'Описание поста',
  })
  readonly content: string;
  @ApiProperty({ example: 1, description: 'ID Пользователя' })
  readonly userId: number;
}
