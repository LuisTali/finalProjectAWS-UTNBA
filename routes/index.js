import { Router } from 'express';
import { home, getInfo } from "../controllers/index.js";

const router = Router();

router.get('/',home);
router.get('/user',getInfo);

export default router;