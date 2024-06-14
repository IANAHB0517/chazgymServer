import { Injectable } from '@nestjs/common';
import { RegistCustomerDto } from './dto/regist-customer.dto';
import { CustomerService } from 'src/user/customer/customer.service';
import { QueryRunner } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(private readonly customerService: CustomerService) {}

  async registCustByPhone(customer: RegistCustomerDto, qr: QueryRunner) {
    return this.customerService.createCustomer(customer, qr);
  }
}
