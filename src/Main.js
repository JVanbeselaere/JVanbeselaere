import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Body from "./Body";
import Sidebar from "./Sidebar";

function Main() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [editNote, setEditNote] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const onEditNote = () => {
    if(editNote === false){
      setEditNote(true);
    }
    else if(editNote === true){
      setEditNote(false);
    }
  };

  const onHideSidebar = () => {
    if(hideSidebar === false){
      setHideSidebar(true);
    }
    else if(hideSidebar === true){
      setHideSidebar(false);
    }
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div>
      <section class="header">
        <div class = "buttons">
          <button class="menu" onClick={() => onHideSidebar()}>≡</button>
        </div>
        <div class = "title">
          <h1 id="title">Lotion</h1>
          <p>Like Notion, but worse.</p>
        </div>
        <div class = "spacer">
        </div>
      </section>
      <hr></hr>
      <div className="App">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          hideSidebar = {hideSidebar}
        />
        <Body 
          activeNote={getActiveNote()} 
          onUpdateNote={onUpdateNote} 
          onDeleteNote={onDeleteNote} 
          editNote={editNote} 
          onEditNote={onEditNote}
        />
      </div>
    </div>
  );
}

export default Main;