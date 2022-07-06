'use strict'
// app[method]
import express from 'express';
import Contact from '../schemas/contacts.js';

let json = express.json();
let contacts =[
    {
        id: 1,
        title: 'This is contact',
        imageUrl: "Url",
        isPublic: true
    },
    {
        id: 2,
        title: 'This is contact 2',
        imageUrl: "Url",
        isPublic: true
    },
    {
        id: 3,
        title: 'This is contact 3',
        isPublic: false
    }
]



function getContactsController(req,res){
    const contacts =  Contact.find();
    
   return res
   .send({
        data: contacts,
    })
   
}

let id = contacts.length;

async function postContactsController(req,res){
    const contactBody = req.body;
    console.log('contactBody', contactBody);
    console.log('Contact', Contact);
    const savedData = await Contact.create(contactBody);
    const body ={
        data: savedData
    };

    return res
    .status(201)
    .send(body);
 }

function deleteContactsControler(req,res){
    const requestQuery = req.query;
    contacts = contacts.filter((contacts)=>{
        return contacts.id != +requestQuery.id
    })
    return res.send(
        {name:'contacts'}
    )
}

function editContactsControler(req,res){
    const requestQuery = req.query;
    contacts = contacts.map( contact =>{
        if(contact.id === +requestQuery.id ){
            contact.title = requestQuery.title;
        }
        return contacts;
    });
    return res.send(
        {name:'contacts'}
    )
}

export default {
    getContactsController,
    postContactsController,
    deleteContactsControler,
    editContactsControler,
};
