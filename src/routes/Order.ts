import express from 'express';
import { createOrder, listOrder, updateOrderStatus } from '../controllers/Order';
import { authenticate, isAdmin } from '../middleware/AuthMiddleware';

const router = express.Router();


router.post('/create', createOrder);
router.put('/update/:id', authenticate, isAdmin, updateOrderStatus);
router.get('/list', authenticate, isAdmin, listOrder);

export = router;
