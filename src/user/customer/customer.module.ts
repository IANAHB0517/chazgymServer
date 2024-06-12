import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModel } from './entity/customer.entity';
import { CustomerRepository } from './repository/customer.repository';
import { TypeOrmExModule } from 'src/common/dynamic.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerModel]),
    TypeOrmExModule.ForCustomRepository([CustomerRepository]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
