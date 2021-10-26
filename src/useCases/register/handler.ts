import { IRegister } from '@shared/interfaces/register/register.interface';
import { APIGatewayProxyEvent } from 'aws-lambda';

interface ParseHttpEvent extends APIGatewayProxyEvent {
  parameters: {
    body: IRegister
  }
}

const handler = async ({ parameters }: ParseHttpEvent) => {
}