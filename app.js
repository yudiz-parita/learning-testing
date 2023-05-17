const express = require('express');
const port = 8080;

const app=express()

app.use('/users',require('./routes/users'))

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})
