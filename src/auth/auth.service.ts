import { Injectable } from '@nestjs/common';
import { RegistCustomerDto } from './dto/regist-customer.dto';
import { CustomerService } from 'src/user/customer/customer.service';

@Injectable()
export class AuthService {
  constructor(private readonly customerService: CustomerService) {}
  async registCustByPhone(customer: RegistCustomerDto) {
    return this.customerService.createCustomer(customer);
  }
}
