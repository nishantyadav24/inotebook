import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext'; // Import the correct context

const Home = () => {
  const context = useContext(noteContext);  // Use the context
  const { notes } = context;  // Destructure notes from context

  return (
    <div className="container"> 
      <h1>Add a note</h1>
    
      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h2>Your notes</h2>
      {notes.map((note) => {
        return (
          <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
