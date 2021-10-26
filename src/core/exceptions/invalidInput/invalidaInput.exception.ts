import { BadRequest } from '../badRequest/badRequest.exception';

export class InvalidInputException extends BadRequest{
  constructor(message: string, statusCode: number){
    super(message)
  }
}