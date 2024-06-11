import { PickType } from '@nestjs/mapped-types';
import { CustomerModel } from 'src/user/customer/entity/customer.entity';

export class RegistCustomerDto extends PickType(CustomerModel, [
  'name',
  'phone',
  'isGroup',
  'besinessType',
  'guardianName',
  'guardianRelationship',
  'guardianPhone',
  'memoForAdmin',
  'birthDay',
  'gender',
  'zipCode',
  'addr',
  'detailAddr',
  'grade',
  'state',
]) {}
