//  import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import {
//   ENV_DB_HOST_KEY,
//   ENV_DB_NAME_KEY,
//   ENV_DB_PASSWORD_KEY,
//   ENV_DB_PORT_KEY,
//   ENV_DB_USERNAME_KEY,
// } from './src/common/const/env-keys.const';

// function ormConfig(): TypeOrmModuleOptions {
//   const commonConf = {
//     SYNCRONIZE: false,
//     ENTITIES: [__dirname + '**/entity/*.entity.{ts}'],
//     MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
//     CLI: {
//       migrationsDir: 'src/migrations',
//     },
//     MIGRATIONS_RUN: false,
//   };

//   return {
//     name: 'defalut',
//     type: 'mysql',
//     database: process.env[ENV_DB_NAME_KEY],
//     host: process.env[ENV_DB_HOST_KEY],
//     port: parseInt(process.env[ENV_DB_PORT_KEY]),
//     username: process.env[ENV_DB_USERNAME_KEY],
//     password: process.env[ENV_DB_PASSWORD_KEY],
//     logging: true,
//     synchronize: commonConf.SYNCRONIZE,
//     entities: commonConf.ENTITIES,
//     migrations: commonConf.MIGRATIONS,
//     migrationsRun: commonConf.MIGRATIONS_RUN,
//   };
// }

// export { ormConfig };
