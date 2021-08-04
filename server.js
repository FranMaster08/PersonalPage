const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/view/index.html'))
})

app.listen(3000,()=>{console.log('el server esta corriendo en el puerto 3000')})