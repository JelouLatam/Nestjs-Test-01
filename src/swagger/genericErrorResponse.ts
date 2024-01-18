import { ApiProperty } from '@nestjs/swagger';

export class GenericErrorResponse {
  @ApiProperty()
  message: Array<string>;

  @ApiProperty()
  error: string;

  @ApiProperty()
  statusCode: number;
}
