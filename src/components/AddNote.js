import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import second from 'first'
const AddNote = () => {
    const context = useContext(noteContext);
    const{addnote}=context;
    const [note , setNotes] = useState({title:"",descrption:"",tag:""})
    const HandleOnClick =(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag);

    }
    const onchange =(e)=>{
        setNotes({...note,[e.target.name]:e.target.value})

    }
  return (
    <div className="container my-4"> 
      <h2>Add a note</h2>
    
      <form className="mb-3 my-5">
        <div className="mb-3">
          <label htmlFor="title "  className="form-label">Title</label>
          <input type="Text" className="form-control" id="title" aria-describedby="emailHelp" onChange={onchange} />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description "onChange={onchange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={HandleOnClick}>Add Note</button>
      </form>
      </div>
  )
}

export default AddNote