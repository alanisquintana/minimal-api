import { Request, Response } from 'express';
import { getUserLogin } from '../business/auth.business';

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const accessToken = await getUserLogin(email, password);

    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error });
  }
};
