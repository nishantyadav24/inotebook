import React from 'react'

const NoteItem = () => {
    const {note}=props;
  return (
    <>
    <div>
        {note.title}
        {note.description}
        <div class="card" style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}</p>
 
  </div>
</div>
    </div>
    </>
  )
}

export default NoteItem