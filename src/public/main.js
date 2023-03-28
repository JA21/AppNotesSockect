const clientSocket = io();

const formNotes=document.querySelector('#formNotes')
const title = document.getElementById('title');
const description = document.getElementById('description');

formNotes.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    clientSocket.emit('client:newNote',{
        title:title.value,    
        description:description.value
      })
})