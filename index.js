

const express = require('express')
var morgan = require('morgan')
const http = require('http')

const initDbM = require('./bd.js');
const NoteModel = require('./src/controllers/notes.controller');


const app = express()
const httpServer = http.createServer(app);
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
io.on('connection',async(client) => {
  let find = await NoteModel.allNotes();
  client.emit('server:loadNotes',{find})
  client.on('client:newNote', async (newNote) => {
    const data = {
      title: newNote.title,
      description: newNote.description,
      state: true
    }
    const noteAdd=await NoteModel.creteNoteSocket(data) 
      const findByID=await NoteModel.findByIdNote(noteAdd)
      io.emit('server:renderNotes', { findByID })
  })
  
  client.on("client:deleteNote",async(id)=>{
    const deleteIdNote=await NoteModel.deleteIdNote(id);
    if(deleteIdNote){
      const findNotes = await NoteModel.allNotes();
      io.emit('server:deleteNote',{findNotes})
    }
  });

  client.on("client:updateNote",async data=>{
   const updateNote=await NoteModel.updateNoteId(data);
   if(updateNote){
    find = await NoteModel.allNotes();
    io.emit('server:updateNote',{find})
   }
  })

});


//routes
require('./src/routes/index.js')(app);

//listen server
httpServer.listen(process.env.port);


/* app.listen(process.env.port)
console.log(`server on port ${process.env.port}`) */