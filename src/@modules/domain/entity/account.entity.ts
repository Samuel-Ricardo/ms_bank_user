import { injectable } from 'inversify';
import { IAccountDTO } from '../DTO/client/account.dto';

@injectable()
export class Account {
  constructor(
    private readonly _id: string,
    private readonly _bacenId: string,
    private readonly _account_number: string,
    private readonly _full_name: string,
    private readonly _email: string,
    private readonly _cpf: string,
    private readonly _zip_code: string,
    private readonly _birth_date: Date,
    private readonly _created_at?: Date,
    private readonly _updated_at?: Date,
  ) {}

  toDTO(): IAccountDTO {
    return {
      id: this._id,
      bacenId: this._bacenId,
      account_number: this._account_number,
      cpf: this._cpf,
      full_name: this._full_name,
      email: this._email,
      zip_code: this._zip_code,
      birth_date: this._birth_date,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  static fromDTO(DTO: IAccountDTO) {
    return new Account(
      DTO.id!,
      DTO.bacenId!,
      DTO.account_number,
      DTO.full_name,
      DTO.email,
      DTO.cpf,
      DTO.zip_code,
      DTO.birth_date,
      DTO.created_at,
      DTO.updated_at,
    );
  }
}
