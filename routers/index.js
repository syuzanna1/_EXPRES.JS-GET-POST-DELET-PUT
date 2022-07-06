'use strict'
import fs from 'fs';
import express from 'express';
import contr  from '../controllers/index.js';
const contactsRt = express.Router();

contactsRt.get('/contacts/', contr.getContactsController);
contactsRt.post('/contacts', contr.postContactsController);
contactsRt.delete('/contacts', contr.deleteContactsControler);
// contactsRt.put('/contacts', contr.editContactsControler);
export default contactsRt;