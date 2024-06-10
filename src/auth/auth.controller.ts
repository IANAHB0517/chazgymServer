import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistCustomerDto } from './dto/regist-customer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('regist/customer')
  postCustmoer(@Body() body: RegistCustomerDto) {
    return this.authService.registCustByPhone(body);
  }
}
