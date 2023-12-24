import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class TraceDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  serviceId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  consumerId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5)
  channelCode: string;

  @IsNotEmpty()
  @IsNumber()
  traceId: number;

  @IsNotEmpty()
  @MaxLength(25)
  dateTime: Date;
}

export class IdentityDTO {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsString()
  @MaxLength(25)
  deviceId: string;

  @IsString()
  @MaxLength(15)
  host: string;
}
