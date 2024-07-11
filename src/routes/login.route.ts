import { userLogin } from '../controllers/auth.controller';
import { Router } from 'express';

const router = Router();

router.post('/login', userLogin);

export default router;
