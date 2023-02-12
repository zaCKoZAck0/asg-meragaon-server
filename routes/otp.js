import express from 'express';
import { sendOTP } from '../controllers/otp.js';
const router = express.Router();

// send OTP to given number
router.post('/', sendOTP);

export default router;