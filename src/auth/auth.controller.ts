import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistCustomerDto } from './dto/regist-customer.dto';
import { QueryRunner } from 'src/common/decorator/query-runner.decorator';
import { TransactionInterceptor } from 'src/common/interceptor/transction.interceptor';
import { QueryRunner as QR } from 'typeorm';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('regist/customer')
  @UseInterceptors(TransactionInterceptor)
  postCustmoer(@Body() body: RegistCustomerDto, @QueryRunner() qr: QR) {
    return this.authService.registCustByPhone(body, qr);
  }
}
