import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';  // Correctly import NoteState
import Alert from './components/Alert'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="This is amazing react course"></Alert>
        <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  {/* Ensure path is lowercase "about" */}
        </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
