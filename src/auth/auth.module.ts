import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { CustomerModule } from 'src/user/customer/customer.module';

@Module({
  imports: [UserModule, CustomerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
