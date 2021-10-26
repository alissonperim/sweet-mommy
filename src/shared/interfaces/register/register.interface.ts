export interface IUser { 
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfLastPeriod: Date
}

export type IRegister = Omit<IUser, 'id'>