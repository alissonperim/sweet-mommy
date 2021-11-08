import { ICreatePregnant, IPregnant } from './pregnant.interface';

export interface IPregnantRepository<T>{
  findById: (params: string) => Promise<T | undefined>
  create: (data: ICreatePregnant) => Promise<T>
  save: (data: IPregnant) => Promise<T>
}