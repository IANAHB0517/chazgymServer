import { CustomRepository } from 'src/common/decorator/typeorm-ex.decorator';
import { CustomerModel } from '../entity/customer.entity';
import { Repository } from 'typeorm';

@CustomRepository(CustomerModel)
export class CustomerRepository extends Repository<CustomerModel> {}
