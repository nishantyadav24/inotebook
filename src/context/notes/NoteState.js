import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:3002"
  // const notesInitial = [
    // {
  //     "_id": "66b617f7ef9356b5a7a4ec76",
  //     "user": "66b5a277f6e978aa514a97c4",
  //     "title": "new Note",
  //     "description": "This is a new note",
  //     "tag": "new",
  //     "date": "2024-08-09T13:21:59.832Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "66ba0d18996e5ec351aadafe",
  //     "user": "66b5a277f6e978aa514a97c4",
  //     "title": "new Note",
  //     "description": "This is a very new note",
  //     "tag": "new",
  //     "date": "2024-08-12T13:24:40.516Z",
  //     "__v": 0
  //   }
  // ];
  const getAllNotes = async ()=>{

    const editNote = async ()=>{
      //API call  
    
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"OTZI_LpwvHPonDmlHSTWqdmqDa1JrD3vS4oGnLwjUC0"
        },
        
        
      });
      const json = await response.json()
      console.log(json)
    
  }
}

   
  const [notes, setNotes] = useState(notesInitial);

  //Add a note 
  const addNote = (title,description,tag)=>{
    // :TODO api call
    const note =  {
      "_id": "66b617f7ef9356b5a7a4ec76",
      "user": "66b5a277f6e978aa514a97c4",
      "title":  title,
      "description": description,
      "tag": tag,
      "date": "2024-08-09T13:21:59.832Z",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }


//Delete a note 

 const deleteNote = (id)=>{
  console.log("deleting a note" +ID)
  const newNotes = notes.filter((note)=>(note._id!==id))
  setNotes(newNotes)
  

  }

// Edit a note
const editNote = async (id,title,descrption,tag)=>{
  //API call  

  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"OTZI_LpwvHPonDmlHSTWqdmqDa1JrD3vS4oGnLwjUC0"
    },
    body: JSON.stringify(title , description ,tag ),
    
  });
  const json = response.json(); 
  //login to edit in cliennt 
 for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  if(element._id === id ){
    element.title = title;
    element.description  = description;
    element.tag = tag;
  }
  
 }

}

  return ( 
    <noteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
