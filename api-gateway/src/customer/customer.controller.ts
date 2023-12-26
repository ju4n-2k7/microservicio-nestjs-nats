import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetCustomerDetailsDTO } from './dtos/GetCustomerDetails.dto';
import { lastValueFrom } from 'rxjs';

@Controller('customer')
export class CustomerController {
  constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

  @Post('details')
  async getCustomerDetails(
    @Body() getCustomerDetailsDTO: GetCustomerDetailsDTO,
  ) {
    const customerDetails = await lastValueFrom(
      this.natsclient.send(
        { cmd: 'getCustomerDetails' },
        getCustomerDetailsDTO,
      ),
    );
    if (customerDetails) return customerDetails;
    else throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
}
