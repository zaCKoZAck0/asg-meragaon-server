import express from 'express';
import { getContacts, addContactsFromJSON, deleteContact, updateContact } from "../controllers/contacts.js";
const router = express.Router();

// get all contacts
router.get('/', getContacts);
// input JSON contacts
router.post('/', addContactsFromJSON);
// delete contact by id
router.delete('/:id', deleteContact);
// update contact by id
router.patch('/:id', updateContact);

export default router;