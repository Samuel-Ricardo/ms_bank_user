import { injectable } from 'inversify';
import { IClientDTO } from '../DTO/client/client.dto';

@injectable()
export class Client {
  constructor(
    private readonly _id: string,
    private readonly _bacenId: string,
    private readonly _account_number: string,
    private readonly _cpf: string,
    private readonly _created_at?: Date,
    private readonly _updated_at?: Date,
  ) {}
}
