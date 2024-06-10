import { PartialType } from '@nestjs/mapped-types';
import { RegistCustomerDto } from './regist-customer.dto';

export class UpdateCustomerDto extends PartialType(RegistCustomerDto) {}
