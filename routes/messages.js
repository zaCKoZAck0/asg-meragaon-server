import express from 'express';
import { getAllMessages } from '../controllers/messages.js';
const router = express.Router();

router.get('/', getAllMessages);

export default router;