import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from 'src/auth/dto/update-customer.dto';
import { CustomerSearchDto } from './dto/customer-search.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomers() {
    return this.customerService.getAllUsers();
  }

  // 통합검색 API와 특정검색 API를 여러개 만든는 것 보다는 그냥 검색 API를 하나 만들고 옵션에 따라 쿼리빌더를 통해
  // 다르게 사용하는 것이 낫지 않을까?
  // 생일의 경우12자리 string으로 받아서 split후 사용
  @Get()
  getCustomersSearch(
    @Query() query: CustomerSearchDto,
    // @Param('integratedKeyword') keyword?: string,
    // @Param('birthday') birthday?: string,
    // @Param('businessType') businessType?: string,
    // @Param('state') state?: string,
    // @Param('isGroup') isGroup?: string,
    // @Param('grade') grade?: string,
  ) {
    return this.customerService.getUsersSearch(query);
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.getUserById(id);
  }

  @Patch(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(id, dto);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteCustomer(id);
  }
}
