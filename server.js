const express = require('express')
const srv=express();
const todoRoute = require('./route/todos')

srv.use(express.json());
srv.use(express.urlencoded({extended :true}))


srv.get('/hello',(req,res)=>{
    res.send("Hello");
})

srv.use('/public',express.static( __dirname + '/public'))

srv.use('/todos',todoRoute)


srv.listen(3000);