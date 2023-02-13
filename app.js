import cors from 'cors';
import express from 'express';
import contactsRoute from './routes/contacts.js';
import otpRoute from './routes/otp.js';
import messageRoute from './routes/messages.js'

const app = express();

//origins allowed
const options = {
origin: ['http://localhost:3000','http://localhost:8080', "https://asg-meragaon-client.vercel.app", "https://asg-meragaon-client-zackozack0.vercel.app/", "https://asg-meragaon-client-git-master-zackozack0.vercel.app/"],
}
app.use(cors(options));
app.use(express.json({ limit: '10mb' }));

app.get('/', (req,res)=>{
    res.send("<H1>Hello</H1>")
})

// to getall, add, edit & delete contacts
app.use("/api/contacts",contactsRoute);
// to send OTP
app.use("/api/otp",otpRoute);
// to get all messages
app.use("/api/messages",messageRoute);

export default app;