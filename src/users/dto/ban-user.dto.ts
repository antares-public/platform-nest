import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'ID Пользователя' })
  readonly userId: number;
  @ApiProperty({ example: 'Маты', description: 'Причина бана' })
  readonly banReason: string;
}
