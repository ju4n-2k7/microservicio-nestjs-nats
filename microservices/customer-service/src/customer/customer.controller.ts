import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GetCustomerDetailsDTO } from './dtos/GetCustomerDetails.dto';

@Controller()
export class CustomerMicroserviceController {
  @MessagePattern({ cmd: 'getCustomerDetails' })
  getCustomerDetails(@Payload() data: GetCustomerDetailsDTO) {
    console.log(data);
    return { msg: 'Success' };
  }
}
