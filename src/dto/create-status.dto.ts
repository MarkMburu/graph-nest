import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty()
  transition: string[];
  @ApiProperty()
  status: number;
  @ApiProperty()
  bulk_statuses: number[];
}
