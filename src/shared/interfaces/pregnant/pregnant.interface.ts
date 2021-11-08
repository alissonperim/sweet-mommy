import { GestationEntity } from '@entities/gestations';

export interface IPregnant{
  id: string
  firstName: string
  lastName: string
  gestationId: GestationEntity[]
  email: string
  password: string
  birthdate: Date
  lastPeriod: Date
  firstPregnance: boolean
  numberOfPregnances: number
  phoneNumber: string
}

export type ICreatePregnant = Omit<IPregnant, 'id'>