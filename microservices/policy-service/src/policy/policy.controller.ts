import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UpdateInsuranceBeneficiariesDTO } from './dtos/UpdateInsuranceBeneficiaries.dto';

@Controller()
export class PolicyMicroserviceController {
  @EventPattern('updateInsuranceBeneficiaries')
  updateInsuranceBeneficiaries(
    @Payload() updateInsuranceBeneficiariesDTO: UpdateInsuranceBeneficiariesDTO,
  ) {
    console.log(updateInsuranceBeneficiariesDTO);
  }
}
