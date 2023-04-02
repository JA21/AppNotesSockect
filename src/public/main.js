

const formNotes = document.querySelector('#formNotes')
const title = document.getElementById('title');
const description = document.getElementById('description');



formNotes.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(idSave){
    console.log(idSave)
    const data={
      id:idSave,
      title:title.value,
      description:description.value
    }
    updateNote(data); 
  }else{
    postNotes(title.value,description.value)
  }

})