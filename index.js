import express from 'express';
const app = express();
const port = 5000;
let json = express.json();

app.listen(port,()=> console.log(`Server is listening port ${port}`));

// app[method]

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
   return res.send({
        data: contacts,
    })
}
let id = contacts.length;

function postContactsController(req,res){
    const requestQuery = req.query;
    console.log('request Query', requestQuery);
    console.log('request body', req.body);   
    contacts.push(
//         {
//         // id: 4,
//         // title: 'This is contact 4',
//         // imageUrl: "Url4",
//         // isPublic: true
// // ******
//     },
//      requestQuery  
            {
                id:++id,
            ...requestQuery}
    );
    return res.send({
        name: 'post'
    });
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

app.get('/contacts', getContactsController);
app.post('/contacts', postContactsController);
app.delete('/contacts', deleteContactsControler);
app.put('/contacts', editContactsControler);
