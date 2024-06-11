import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  ENV_DB_HOST_KEY,
  ENV_DB_NAME_KEY,
  ENV_DB_PASSWORD_KEY,
  ENV_DB_PORT_KEY,
  ENV_DB_USERNAME_KEY,
} from './common/const/env-keys.const';
import { CustomerModel } from './user/customer/entity/customer.entity';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false,
    // ENTITIES: [__dirname + '**/entity/*.entity.{ts}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: false,
  };

  return {
    name: 'defalut',
    type: 'mysql',
    database: process.env.DB_DATABASE,
    host: 'localhost',
    port: parseInt('3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: true,
    // synchronize: commonConf.SYNCRONIZE,
    synchronize: true,
    // entities: commonConf.ENTITIES,
    entities: [CustomerModel],
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormConfig };
