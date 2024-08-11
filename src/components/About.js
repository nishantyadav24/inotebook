import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';

const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>This is About {a.state.name} and he is in {a.state.class}</div>  // Ensure there is a space between "About" and "{a.name}"
  );
}

export default About;
