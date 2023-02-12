import cors from 'cors';
import express from 'express';
import contactsRoute from './routes/contacts.js';
import otpRoute from './routes/otp.js';
import messageRoute from './routes/messages.js'

const app = express();
const options = {
origin: ['http://localhost:3000','http://localhost:8080'],
}
app.use(cors(options));
app.use(express.json({ limit: '10mb' }));

app.use("/api/contacts",contactsRoute);
app.use("/api/otp",otpRoute);
app.use("/api/messages",messageRoute);

export default app;