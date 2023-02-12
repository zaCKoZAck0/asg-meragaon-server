import { createDB } from "../utils/db.js";
import { __dirname } from "../globals.js";
import { validateField } from "../utils/validateJson.js";
const db = createDB(__dirname)
import crypto from 'crypto';

export const getContacts =  async (req, res) => {
    try {
    await db.read();
    return res.status(200).json({contacts: db.data.contacts});
    } catch (err) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const deleteContact = async (req, res) => {
    const id = req.query.id;
    try {
        await db.read();
        db.data.contacts = db.data.contacts.filter(contact => contact.id !== id)
        await db.write();
        return res.status(200).json({contacts: db.data.contacts});
    } catch (err) {
        return res.status(500).json({message : "Internal Server Error"})
}}

export const updateContact = async (req, res) => {
    const id = req.query.id;
    const newContact = req.params.body;
        try{
        await db.read();
        db.data.contacts.map(async contact =>{
            if(contact.id === id){
                contact.firstname = newContact.firstname;
                contact.lastname = newContact.lastname;
                contact.email = newContact.email;
                contact.phone = newContact.phone;
                contact.displayname = 
            validateField(contact.firstname) || validateField(contact.lastname)?
            contact.firstname + " " + contact.lastname:
            "Unknown contact";
            db.data.contacts = contact;
            await db.write();
            }
        })
    } catch(err) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}


export const addContactsFromJSON = async (req, res) => {
    const contactsString = req.body;
    //const isValid = validateJSONString(contactsString);
    //if (!isValid) return res.status(422).json({message:"Invalid JSON provided."})
    const contacts = [];
    console.log(contactsString)
    const contactsJSON = JSON.parse(contactsString.contacts)
    contactsJSON.map(contact => {
        const tempContact = {};
        tempContact.id = crypto.randomBytes(20).toString('hex');
        tempContact.firstname = contact.firstname;
        tempContact.firstname ||= "";
        tempContact.lastname = contact.lastname;
        tempContact.lastname ||= "";
        tempContact.email = contact.email;
        tempContact.email ||= "";
        tempContact.phone = contact.phone;
        tempContact.picture = contact.picture;
        tempContact.picture ||= "";
        tempContact.displayname = 
            validateField(tempContact.firstname) || validateField(tempContact.lastname)?
            tempContact.firstname + " " + tempContact.lastname:
            "Unknown contact";
        if(validateField(tempContact.phone)) contacts.push(tempContact);
    })

    try {
    await db.read();
    db.data.contacts = contacts;
    await db.write();
    }
    catch (err) {
        return res.status(500).json({message: "Internal Server Error"})
    }
    return res.status(200).json({contacts: contacts})
}
