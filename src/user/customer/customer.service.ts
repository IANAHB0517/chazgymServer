import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistCustomerDto } from 'src/auth/dto/regist-customer.dto';
import { UpdateCustomerDto } from 'src/auth/dto/update-customer.dto';
import { CustomerRepository } from './repository/customer.repository';
import { QueryRunner } from 'typeorm';
import { CustomerModel } from './entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  getRepository(qr?: QueryRunner) {
    return qr
      ? qr.manager.getRepository(CustomerModel)
      : this.customerRepository;
  }

  async createCustomer(customer: RegistCustomerDto, qr: QueryRunner) {
    // qr 에서 사용할 repository 주입
    const repository = this.getRepository(qr);

    // 유저 생성 로직 시작
    const phoneExists = await repository.exists({
      where: {
        phone: customer.phone,
      },
    });

    if (phoneExists) {
      throw new BadRequestException('이미 가입된 전화번호 입니다.');
    }

    const newCustomer = await repository.create({
      ...customer,
    });

    // save 하는 과정이 없어짐 ???
    await this.customerRepository.save(newCustomer);

    // save하는 코드가 사라지면서 newCustomer의 id가 생성 되지 않았고 그로 인해서 getUserById 메서드가 작동하지 않는 오류를 겪음
    // throw Exception을 하지 않았을 때는 response의 값이 아무것도 없는 형태였지만 Exception 처리를 통해서 Transaction Interceptor가 작동하는 것까지 확인할 수 있었다.
    // 추가적으로 getUserById에서 id값이 들어가지 않으면서 생성했던 트랜잭션이 롤백 되면서 id 값이 6에서 10까지 증가했고 이후 성공한 데이터의 아이디가 11로 입력되었다.
    return this.getUserById(newCustomer.id);
  }

  async getUserById(id: number) {
    const customer = await this.customerRepository.findOneBy({ id });

    if (!customer) {
      throw new BadRequestException(`해당 id의 고객이 존재하지 않습니다.`);
    }

    // 회원 생성후 해당 회원을 불러오지 못한채로 response하는 현상 발생중 타 메서드를 통해서는 잘 가져온다
    //
    return customer;
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
