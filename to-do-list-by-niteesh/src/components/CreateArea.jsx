import React, { useState, useEffect } from "react";

function CreateArea({ onAdd, editingNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    priority: 1,
  });

  useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
    }
  }, [editingNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: name === "priority" ? parseInt(value) : value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title.trim() || note.content.trim()) {
      onAdd(note);
      setNote({ title: "", content: "", priority: 1 });
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <select name="priority" value={note.priority} onChange={handleChange}>
          <option value={3}>Low</option>
          <option value={2}>Medium</option>
          <option value={1}>High</option>
        </select>
        <button onClick={submitNote}>{editingNote ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default CreateArea;
