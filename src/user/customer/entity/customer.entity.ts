import { BaseModel } from 'src/common/entity/base.entity';
import { Column, Entity } from 'typeorm';
import { IsString, Length } from 'class-validator';
import {
  BesinessType,
  Gender,
  Grade,
  IsGroup,
  State,
} from '../const/customer-enum.const';
import { stringValidationMessage } from 'src/common/validation-message/string-validation.message';

@Entity()
export class CustomerModel extends BaseModel {
  //  소비자 개인정보
  @Column({ nullable: false })
  @IsString()
  name: string;

  // 전화번호를 유니크로 선언할 걼인가 말 것인가?
  // 어리신들 중에는 전화가 없으신 분들도 있을 수 있지 않을까???
  // email을 받지 않는 상황에서 전화번호를 유니크로 하지 않으면 고유 값으로 넣어줄 컬럼이 없긴하다 그냥 id 컬럼을 사용해야 하는가
  // 그렇다고 전화 번호를 유니크로 선언하면 만약에 법인으로 가입하신 분이 개인 회원으로 또 가입하고 싶다고 하면 어떻게 할 것인가???
  @Column({ nullable: false, unique: true })
  @IsString({ message: stringValidationMessage })
  @Length(10, 11, { message: stringValidationMessage })
  phone: string;

  // partialType 으로 update DTO를 만들기 위해 선언해줘야 하는 어노테이션 partial타입으로 사용하기 위해서 부모DTo의 모든 컬럼에 선언해줘야한다고 한다. 일단은 사용해서 오류가 나서 더 알아보기 위해서 주석 처리해놓았다.
  // @ApiProperty()
  @Column({
    type: 'enum',
    enum: IsGroup,
    nullable: true,
    default: null,
  })
  @IsString()
  isGroup: IsGroup | null;

  @Column({
    type: 'enum',
    enum: BesinessType,
    nullable: true,
    default: null,
  })
  @IsString()
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
  @IsString()
  gender: Gender;

  @Column({ nullable: false })
  @Length(5, 5, { message: stringValidationMessage })
  zipCode: string;

  @Column({ nullable: false })
  @Length(0, 255, { message: stringValidationMessage })
  @IsString()
  addr: string;

  @Column({ nullable: false })
  @Length(0, 255, { message: stringValidationMessage })
  @IsString()
  detailAddr: string;

  @Column({
    type: 'enum',
    enum: Grade,
    nullable: false,
  })
  @IsString()
  grade: Grade | null;

  @Column({
    type: 'enum',
    enum: State,
    nullable: false,
  })
  @IsString()
  state: State | null;
}

// 되어라...
