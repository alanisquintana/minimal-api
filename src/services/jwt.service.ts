import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY!;

export const generateToken = (email: string, password: string) => {
  /* const { email, password } = admin; */
  const payload = { email, password };

  return jwt.sign(payload, secretKey);
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
