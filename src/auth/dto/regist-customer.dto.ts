import { PickType } from '@nestjs/mapped-types';
import { CustomerModel } from 'src/user/customer/entity/customer.entity';

export class RegistCustomerDto extends PickType(CustomerModel, [
  'isGroup',
  'besinessType',
  'guardianName',
  'guardianRelationship',
  'guardianPhone',
  'phone',
  'memoForAdmin',
  'birthDay',
  'gender',
  'zipCode',
  'addr',
  'detailAddr',
  'grade',
  'state',
]) {}
