import { Router } from 'express';
import { addSkein, getAllSkeins } from '../controllers/skeinController';

const router = Router();

router.route('/').get(getAllSkeins).post(addSkein);

export default router;
