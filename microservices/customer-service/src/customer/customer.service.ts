import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/Customer';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getCustomerDetails(documentNumber: string) {
    return this.customerRepository.findOneBy({
      documentNumber: documentNumber,
    });
  }
}
