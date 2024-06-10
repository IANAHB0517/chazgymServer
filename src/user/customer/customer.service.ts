import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistCustomerDto } from 'src/auth/dto/regist-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerModel } from './entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerModel)
    private readonly customerRepository: Repository<CustomerModel>,
  ) {}

  async createCustomer(customer: RegistCustomerDto) {
    const phoneExists = await this.customerRepository.exists({
      where: {
        phone: customer.phone,
      },
    });

    if (!phoneExists) {
      throw new BadRequestException('이미 가입된 전화번호 입니다.');
    }

    const newCustomer = await this.customerRepository.create({
      ...customer,
    });

    return await this.customerRepository.save(newCustomer);
  }

  async getAllUsers() {
    return this.customerRepository.find();
  }
}
