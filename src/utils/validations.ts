import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatorio";
  }

  if (!data.email) {
    errors["email"] = "O e-mail é obrigatorio";
  }

  if (!data.agree) {
    errors["agree"] = "Você precisa concordar com os termos";
  }

  return errors;
};
