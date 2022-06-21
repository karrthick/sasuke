const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const app=express();
app.use(express.static('./dist/res'));
app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/res'}),
);
app.listen(process.env.port||8080);