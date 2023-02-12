import express from 'express';
import { getContacts, addContactsFromJSON, deleteContact, updateContact } from "../controllers/contacts.js";
const router = express.Router();

router.get('/', getContacts);
router.post('/', addContactsFromJSON);
router.delete('/:id', deleteContact);
router.patch('/:id', updateContact);

export default router;