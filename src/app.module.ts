import * as common from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { LessonModule } from './lesson/lesson.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { PriceModule } from './price/price.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from 'src/orm.config';
import { CustomerModule } from './user/customer/customer.module';

@common.Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env[ENV_DB_HOST_KEY],
    //   port: parseInt(process.env[ENV_DB_PORT_KEY]),
    //   username: process.env[ENV_DB_USERNAME_KEY],
    //   password: process.env[ENV_DB_PASSWORD_KEY],
    //   database: process.env[ENV_DB_DATABASE_KEY],
    // }),
    AuthModule,
    CommonModule,
    LessonModule,
    OrderModule,
    UserModule,
    PriceModule,
    PaymentModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
