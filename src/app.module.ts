import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { LessonModule } from './lesson/lesson.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { PriceModule } from './price/price.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [AuthModule, CommonModule, LessonModule, OrderModule, UserModule, PriceModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
