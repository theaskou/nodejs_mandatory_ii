import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/welcome', authMiddleware, (req, res) => {
res.send({ data : "welcome to the landingpage!"})
});

export default router;