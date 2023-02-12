import { createDB } from "../utils/db.js";
import { __dirname } from "../globals.js";
const db = createDB(__dirname)

export const getAllMessages = async (req,res) =>{
    try{
    await db.read();
    res.status(200).json({messages: db.data.messages})
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}