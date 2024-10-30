export interface IAccountDTO {
  id?: string;
  bacenId?: string;
  full_name: string;
  email: string;
  zip_code: string;
  birth_date: Date;
  account_number: string;
  cpf: string;
  created_at?: Date;
  updated_at?: Date;
}
