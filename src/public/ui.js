const listNotes = document.querySelector('#divNotes')

let idSave='';

const changeNoteValue = (id,title,description)=>{
  console.log(id,title,description)
  const titleNote = document.getElementById('title');
  const descriptionNote = document.getElementById('description');
  titleNote.value = title;
  descriptionNote.value = description;
  idSave=id;
  
}

const uiNote = (note,state) => {
  const div = document.createElement("div");


  if(state){
    
     div.innerHTML = `
    <div class='card card-body w-80 rounded-0 mb-2'>
    <div class='d-flex justify-content-between'> 
    <h3 class='card-title'>${note.title}</h3>
    <div>
    <button class='btn btn-danger' onclick="deleteNote('${note._id}')">Eliminar</button>
    <button type="button" class='btn btn-warning' onclick="changeNoteValue('${note._id},${note._title},${note._description}')">Actualizar</button>
    </div>
    </div>
    <p>${note.description}</p>
    </div>`
    
    return div;
  }else{
    div.innerHTML = `
    <div class='card card-body w-80 rounded-0 mb-2'>
    <div class='d-flex justify-content-between'> 
    <h3 class='card-title'>${note.title}</h3>
    <div>
    <button class='btn btn-danger' onclick="deleteNote('${note._id}')">Eliminar</button>
    <button type="button" class='btn btn-warning' onclick="changeNoteValue('${note._id}','${note.title}','${note.description}')">Actualizar</button>
    </div>
    </div>
    <p>${note.description}</p>
    </div>`

    return div;
  }
  
}

const renderNotes = (note, type) => {
  if (type==='delete') {
    listNotes.innerHTML='';
    const { findNotes } = note
    findNotes.map(data => listNotes.append(uiNote(data,state)))
  } else if(type==='update'){
    
    listNotes.innerHTML='';
    const { find } = note
    find.map(data => listNotes.append(uiNote(data)))
  }else{
    const { find } = note
    find.map(data => listNotes.append(uiNote(data)))

  }
}

const addNotes = note => {
  const { findByID } = note;
  listNotes.append(uiNote(findByID));
} 