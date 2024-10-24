import React, { useContext } from 'react';
import Notes from './Home'
import noteContext from '../context/notes/NoteContext'; // Import the correct context

const Home = () => {
  const context = useContext(noteContext);  // Use the context
  const { notes } = context;  // Destructure notes from context

  return (
    <div className="container my-4"> 
      <h2>Add a note</h2>
    
      <form className="mb-3 my-5 ">
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

   
 
      <Notes></Notes>
    </div>
  );
}

export default Home;
