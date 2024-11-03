import React, { useContext } from 'react';
import Notes from './Home'
import noteContext from '../context/notes/NoteContext'; // Import the correct context
import AddNote from './AddNote';

const Home = () => {
  const context = useContext(noteContext);  // Use the context
  const { notes } = context;  // Destructure notes from context

  return (
   <><AddNote /><Notes /></>
  );
}

export default Home;
