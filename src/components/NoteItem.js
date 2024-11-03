import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

const NoteItem = () => {
  const context = useContext(noteContext);
    const {note}=props;
    const {deleteNote}=props;
  return (
    <>
    <div className="col-md-3">
      
 <div className="card my-3">
  <div className="card-body">
    <div className="d-flex align-items-center">
    <h5 className="card-title">{note.title}</h5> <i className="fa-solid fa-trash mx-2"></i>
   
   
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{
      deleteNote(note._id )
       
    }}></i>
    </div>
    <p className="card-text">{note.description}</p>
  </div>
</div>
    </div>
    </>
  )
}
export default NoteItem