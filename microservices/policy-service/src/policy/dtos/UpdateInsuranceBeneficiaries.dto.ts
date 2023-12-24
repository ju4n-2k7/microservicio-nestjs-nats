import {
  IsIn,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { TraceDTO, IdentityDTO } from '../../../common/dtos/TraceIdentity.dto';

export class BeneficiaryDTO {
  @IsNotEmpty()
  @IsString()
  @Matches(/[a-zA-Z ]{2,55}/)
  nombre: string;

  @IsNotEmpty()
  @IsIn(
    [
      'padre',
      'madre',
      'hijo',
      'hija',
      'hermano',
      'hermana',
      'nieto',
      'nieta',
      'abuelo',
      'abuela',
    ],
    { each: true },
  )
  parentesco: string[];

  @IsNotEmpty()
  @IsString()
  @MaxLength(7)
  participacion: string;
}

export class UpdateInsuranceBeneficiariesDTO {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TraceDTO)
  trace: TraceDTO;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => IdentityDTO)
  identity: IdentityDTO;

  @IsString()
  @MaxLength(15)
  numeroPoliza: number;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BeneficiaryDTO)
  beneficiarios: BeneficiaryDTO[];
}
