const clientSocket = io();

const postNotes = (title, description, id) => {
    clientSocket.emit('client:newNote', {
        title,
        description
    })
}

const deleteNote = (id) => {
    clientSocket.emit('client:deleteNote', { id })
}

const updateNote = (data) => {
  
    clientSocket.emit('client:updateNote',data);
}


clientSocket.on('server:renderNotes', async data => addNotes(data))

clientSocket.on('server:loadNotes', async data => renderNotes(data))

clientSocket.on('server:deleteNote', async data => renderNotes(data, type = 'delete'))

clientSocket.on('server:updateNote', async data => renderNotes(data, state = 'update'))