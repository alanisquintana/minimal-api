import { generateToken } from '../services/jwt.service';

export const getUserLogin = async (email: string, password: string) => {
  return generateToken(email, password);
};
