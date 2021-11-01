import { BaseEntity } from '@entities/base-entity'
import { PregnantEntity } from '@entities/pregnants'
import { Genders } from '@shared/enums/genders'
import { 
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity('gestations')
export class GestationEntity extends BaseEntity {
  @IsNotEmpty()
  @ManyToOne(() => PregnantEntity, pregnant => pregnant.gestationId)
  pregnantId!: PregnantEntity

  @IsOptional()
  @IsBoolean()
  @Column({
    type: 'boolean',
    nullable: true
  })
  isTwins?: boolean

  @IsOptional()
  @IsNumber()
  @Column({
    type: 'int2',
    nullable: true
  })
  numberOfBabyes?: number
  
  @IsOptional()
  @IsString()
  @Column({
    type: 'string',
    nullable: true
  })
  babyName?: string

  @IsOptional()
  @IsArray()
  @Column({
    type: 'simple-array',
    nullable: true
  })
  possibleNamesMale?: [] 

  @IsOptional()
  @IsArray()
  @Column({
    type: 'simple-array',
    nullable: true
  })
  possibleNamesFemale?: []

  @IsEnum(Genders)
  @IsOptional()
  @IsNotEmpty()
  @Column({
    type: 'varchar',
    nullable: true
  })
  babyGender?: Genders
}
