import { BaseModel } from 'src/common/entity/base.entity';
import { Column, Entity } from 'typeorm';
import { IsString, Length } from 'class-validator';
import {
  BesinessType,
  Gender,
  Grade,
  IsGroup,
  State,
} from '../const/user-enum.const';
import { stringValidationMessage } from 'src/common/validation-message/string-validation.message';

@Entity()
export class UsersModel extends BaseModel {
  @Column({
    type: 'enum',
    enum: IsGroup,
    nullable: true,
    default: null,
  })
  isGroup: IsGroup | null;

  @Column({
    type: 'enum',
    enum: BesinessType,
    nullable: true,
    default: null,
  })
  besinessType: BesinessType | null;

  @Column({ nullable: false })
  @IsString({ message: stringValidationMessage })
  @Length(2, 26, { message: stringValidationMessage })
  guardianName: string;

  @Column({ nullable: false })
  @IsString({ message: stringValidationMessage })
  @Length(2, 10, { message: stringValidationMessage })
  guardianRelationship: string;

  @Column({ nullable: false })
  @IsString({ message: stringValidationMessage })
  @Length(10, 11, { message: stringValidationMessage })
  guardianPhone: string;

  @Column({ nullable: false })
  @IsString({ message: stringValidationMessage })
  @Length(10, 11, { message: stringValidationMessage })
  phone: string;

  @Column({ nullable: true })
  @Length(0, 255, { message: stringValidationMessage })
  memoForAdmin: string;

  @Column({ nullable: false })
  @Length(8, 8, { message: stringValidationMessage })
  birthDay: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: false,
  })
  gender: Gender;

  @Column({ nullable: false })
  @Length(5, 5, { message: stringValidationMessage })
  zipCode: string;

  @Column({ nullable: false })
  @Length(0, 255, { message: stringValidationMessage })
  addr: string;

  @Column({ nullable: false })
  @Length(0, 255, { message: stringValidationMessage })
  detailAddr: string;

  @Column({
    type: 'enum',
    enum: Grade,
    nullable: false,
  })
  grade: Grade | null;

  @Column({
    type: 'enum',
    enum: State,
    nullable: false,
  })
  state: State | null;
}
