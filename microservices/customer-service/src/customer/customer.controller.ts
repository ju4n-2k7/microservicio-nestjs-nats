import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GetCustomerDetailsDTO } from './dtos/GetCustomerDetails.dto';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerMicroserviceController {
  constructor(private customerService: CustomerService) {}
  @MessagePattern({ cmd: 'getCustomerDetails' })
  getCustomerDetails(@Payload() data: GetCustomerDetailsDTO) {
    const { documentNumber } = data;
    return this.customerService.getCustomerDetails(documentNumber);
  }
}
