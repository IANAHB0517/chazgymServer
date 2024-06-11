import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsString, IsNumber } from 'class-validator';

export abstract class BaseModel {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column({ default: 'test' })
  @IsString()
  regAdminId: string;

  @Column({ default: 'test' })
  @IsString()
  modAdminId: string;

  @CreateDateColumn()
  regDt: Date;

  @UpdateDateColumn()
  modDt: Date;
}
