import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const accountSid = "AC35f1b598ff9d5815ab30831c4c5311d0";
const authToken = "d677e43d0fd460a6c7cfe53703b9e0b1";


const client = require("twilio")(accountSid, authToken);

import { createDB } from "../utils/db.js";
import { __dirname } from "../globals.js";

const db = createDB(__dirname)


export const sendOTP = (req, res) => {
    const phoneNumber = req.body.phone;  
    const OTP = req.body.message; 
    const contact = req.body.contact;

   client.messages
  .create({ body: `Your OTP is, ${OTP}`, from: "+18144812166", to: `+91${phoneNumber}` })
  .then(async message => {
    try {
    await db.read();
    if (typeof(db.data.messages)!=='object') db.data.messages = []; 
    const dbMessages = db.data.messages;
    const newMessage = {};
    newMessage.id = message.sid
    newMessage.name = contact.name
    newMessage.date = message.dateCreated
    newMessage.message = OTP
    newMessage.phone = phoneNumber
    newMessage.displayname = contact.displayname
    dbMessages.push(newMessage);
    db.data.messages = dbMessages;
    await db.write();
    }
    catch (err) {
        return res.status(500).json({message: err})
    }
    return res.status(200).json({message:message});
  })
  .catch(e => { 
    console.log(e)
    res.status(e.status).json({message: e}) });
}

