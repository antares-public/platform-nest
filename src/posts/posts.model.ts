import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID Поста' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Как пингвин в космосе летал',
    description: 'Заголовок поста',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'Летал и лета вам то что',
    description: 'Описание поста',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({
    example: 'https://image.jpg',
    description: 'Картинка (пингвина в космосе)',
  })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 1, description: 'ID Пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: 'Пушкин', description: 'Автор поста' })
  @BelongsTo(() => User)
  author: User;
}
