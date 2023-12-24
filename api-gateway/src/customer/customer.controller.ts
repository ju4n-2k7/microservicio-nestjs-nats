import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetCustomerDetailsDTO } from './dtos/GetCustomerDetails.dto';

@Controller('cliente/buscar')
export class CustomerController {
  constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

  @Post()
  getCustomerDetails(@Body() getCustomerDetailsDto: GetCustomerDetailsDTO) {
    console.log(getCustomerDetailsDto);
    return this.natsclient.send(
      { cmd: 'getCustomerDetails' },
      getCustomerDetailsDto,
    );
  }
}
