import React, { useContext } from 'react'


import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
const Notes=()=> {
    const context = useContext(noteContext);
    const{notes,setNotes}=Context;

  return (
    <div className='container my-3'>
        <h2>
           Your notes </h2>
           {notes.map((note)=>{
            return <NoteItem note={note}/>
           })
}
</div>
  )
}

export default Notes