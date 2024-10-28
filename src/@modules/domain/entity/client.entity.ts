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

  toDTO(): IClientDTO {
    return {
      id: this._id,
      bacenId: this._bacenId,
      account_number: this._account_number,
      cpf: this._cpf,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  static fromDTO(DTO: IClientDTO) {
    return new Client(
      DTO.id!,
      DTO.bacenId!,
      DTO.account_number,
      DTO.cpf,
      DTO.created_at,
      DTO.updated_at,
    );
  }
}
