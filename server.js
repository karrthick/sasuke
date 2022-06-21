const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const app=express();
app.use(express.static('./dist/res'));
