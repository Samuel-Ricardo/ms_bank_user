import { IDeleteAccountDTO } from '../../DTO/client/delete.dto';

export interface IDeleteAccountUseCase {
  execute(DTO: IDeleteAccountDTO): Promise<void>;
}
