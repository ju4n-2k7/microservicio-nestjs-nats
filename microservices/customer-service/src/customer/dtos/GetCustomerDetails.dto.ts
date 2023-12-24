import {
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { TraceDTO, IdentityDTO } from '../../../common/dtos/TraceIdentity.dto';

export class GetCustomerDetailsDTO {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TraceDTO)
  trace: TraceDTO;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => IdentityDTO)
  identity: IdentityDTO;

  @IsNotEmpty()
  @IsIn(['01', '04', '06', '07', '11', '00'], { each: true })
  tipoDocumento: string[];

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @MinLength(8)
  numeroDocumento: string;
}
