import React from "react";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s1 = {
    "name": "harry",
    "class": "5b"
  };
const [state,setState] = useState(s1)
const update = () =>{
    setTimeout(()=>{
        setState({
            "name":"larry",
            "class":"8b"
        }) 
    },1000)
}
  return (
    <noteContext.Provider value={{state, update}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
