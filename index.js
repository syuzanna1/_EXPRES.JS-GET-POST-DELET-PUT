'use strict'
import express from 'express';
import mongoose from 'mongoose';
import routers from './routers/index.js';

const app = express();
const port = 5000;
let json = express.json();
// conect to frontend
const StaticFiles = express.static('./frontend');
app.use(StaticFiles);


// conect to database
(async ()=>{
    await mongoose.connect('mondodb://localhost:27017/test')
})
app.use(routers);
app.listen(port,()=> console.log(`Server is listening port ${port}`));