import { BaseEntity } from '@entities/base-entity'
import { GestationEntity } from '@entities/gestations'
import {
  IsString,
  IsNotEmpty,
  Min,
  IsEmail,
  IsDate,
  IsBoolean,
  IsNumber
} from 'class-validator'
import { 
  Entity,
  Column
} from 'typeorm'

@Entity('pregnant')
export class PregnantEntity extends BaseEntity {
  @IsString()
  @IsNotEmpty({ message: 'the first name is missing' })
  @Min(3, { message: 'the first name should have 3 letters at least' })
  @Column({
    type: 'string',
    nullable: false
  })
  firstName!: string

  @IsString()
  @IsNotEmpty({ message: 'the last name is missing' })
  @Min(3, { message: 'the last name should have 3 letters at least' })
  @Column({
    type: 'string',
    nullable: false
  })
  lastName!: string

  @IsNotEmpty()
  gestationId!: GestationEntity[]

  @IsString()
  @IsNotEmpty({ message: 'the email is missing' })
  @IsEmail()
  @Column({
    type: 'string',
    unique: true,
    nullable: false
  })
  email!: string

  @IsString()
  @IsNotEmpty({ message: 'the password is missing' })
  @Column({
    type: 'string',
    nullable: false
  })
  password!: string

  @IsDate()
  @Column({
    type: 'date',
    nullable: false
  })
  @IsNotEmpty({ message: 'the birthdate is missing' })
  birthdate!: Date

  @IsDate()
  @Column({
    type: 'date',
    nullable: false
  })
  @IsNotEmpty({ message: 'the last period is missing' })
  lastPeriod!: Date

  @IsBoolean()
  @IsNotEmpty({ message: 'the first pregnance field is missing' })
  @Column({
    type: 'bool',
    nullable: false
  })
  firstPregnance!: boolean

  @IsNumber({ allowNaN: false })
  @Min(1, { message: 'the number of pregnance should not be 0 or less' })
  @IsNotEmpty({ message: 'the number of pregnance is missing' })
  @Column({
    type: 'int2',
    nullable: false
  })
  numberOfPregnances!: number

  @Column({
    type: 'string',
    nullable: true
  })
  phoneNumber?: string
}
