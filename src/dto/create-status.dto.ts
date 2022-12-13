import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty()
  transition: string[];
  @ApiProperty()
  bulk_statuses: number[];
}
