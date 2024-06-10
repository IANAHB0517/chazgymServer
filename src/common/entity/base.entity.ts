// import {
//   Column,
//   CreateDateColumn,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';
// import { IsString } from 'class-validator';

// export abstract class BaseModel {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ default: 'test' })
//   @IsString()
//   regAdminId: string;

//   @Column({ default: 'test' })
//   modAdminId: string;

//   @CreateDateColumn()
//   regDt: Date;

//   @UpdateDateColumn()
//   modDt: Date;
// }
