import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "66b617f7ef9356b5a7a4ec76",
      "user": "66b5a277f6e978aa514a97c4",
      "title": "new Note",
      "description": "This is a new note",
      "tag": "new",
      "date": "2024-08-09T13:21:59.832Z",
      "__v": 0
    },
    {
      "_id": "66ba0d18996e5ec351aadafe",
      "user": "66b5a277f6e978aa514a97c4",
      "title": "new Note",
      "description": "This is a very new note",
      "tag": "new",
      "date": "2024-08-12T13:24:40.516Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
