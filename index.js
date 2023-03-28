

const express = require('express')
var morgan = require('morgan')
const dotenv = require("dotenv").config()
const http = require('http')

const initDbM = require('./bd.js');

const app = express()
const httpServer=http.createServer(app);
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//init db moongose
initDbM(app);

//use static
app.use(express.static(__dirname + '/src/public'))


//config socket.io
const io = require('socket.io')(httpServer);
io.on('connection', client => {
  client.on('client:newNote',(client)=>{
    console.log(client)
  })
  client.emit('server:renderNotes')
});
httpServer.listen(process.env.port);


//listen server
/* app.listen(process.env.port)
console.log(`server on port ${process.env.port}`) */