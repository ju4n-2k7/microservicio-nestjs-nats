import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateInsuranceBeneficiariesDTO } from './dtos/UpdateInsuranceBeneficiaries.dto';

@Controller('poliza/beneficiarios/actualizar')
export class PolicyController {
  constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

  @Post()
  updateInsuranceBeneficiary(
    @Body() updateInsuranceBeneficiariesDTO: UpdateInsuranceBeneficiariesDTO,
  ) {
    console.log(updateInsuranceBeneficiariesDTO);
    this.natsclient.emit(
      'updateInsuranceBeneficiaries',
      updateInsuranceBeneficiariesDTO,
    );
  }
}
