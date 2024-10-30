import { ICreateAccountDTO } from '../../DTO/client/create.dto';

export interface ICreateAccountUseCase {
  execute(DTO: ICreateAccountDTO): Promise<void>;
}
