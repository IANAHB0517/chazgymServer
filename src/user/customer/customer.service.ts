import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistCustomerDto } from 'src/auth/dto/regist-customer.dto';
import { UpdateCustomerDto } from 'src/auth/dto/update-customer.dto';
import { CustomerRepository } from './repository/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async createCustomer(customer: RegistCustomerDto) {
    console.log('유저 생성 로직 시작');
    const phoneExists = await this.customerRepository.exists({
      where: {
        phone: customer.phone,
      },
    });

    if (phoneExists) {
      throw new BadRequestException('이미 가입된 전화번호 입니다.');
    }

    const newCustomer = await this.customerRepository.create({
      ...customer,
    });

    await this.customerRepository.save(newCustomer);
    return await this.getAllUsers();
  }

  async getAllUsers() {
    return this.customerRepository.find({ order: { id: 'ASC' } });
  }

  async updateCustomer(id: number, dto: UpdateCustomerDto) {
    console.log('UpdateDto');
    console.log(dto);
    const cust = await this.customerRepository.findOne({ where: { id } });

    console.log('origin');
    console.log(cust);

    if (!cust) {
      throw new BadRequestException('존재하지 않는 사용자 입니다.');
    }

    const prevCust = await this.customerRepository.preload({ id, ...dto });
    console.log(' prevCust ');
    console.log(prevCust);

    const newCust = await this.customerRepository.save(prevCust);
    console.log('newCust');
    console.log(newCust);
    return newCust;
  }

  async deleteCustomer(id: number) {
    const cust = await this.customerRepository.findOne({
      where: {
        id,
      },
    });

    if (!cust) {
      throw new BadRequestException('존재하지 않는 회원입니다.');
    }

    await this.customerRepository.delete(id);

    return cust.id;
  }
}
