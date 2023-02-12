import express from 'express';
import { sendOTP } from '../controllers/otp.js';
const router = express.Router();

router.post('/', sendOTP);

export default router;