import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid"; // install: npm install uuid

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  function addNote(newNote) {
    if (editingNote) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editingNote.id ? { ...newNote, id: note.id } : note
        )
      );
      setEditingNote(null);
    } else {
      setNotes((prevNotes) => [...prevNotes, { ...newNote, id: uuidv4() }]);
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function editNote(id) {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditingNote(noteToEdit);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} editingNote={editingNote} />
      {notes
        .sort((a, b) => b.priority - a.priority) // High to low priority
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            priority={note.priority}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
