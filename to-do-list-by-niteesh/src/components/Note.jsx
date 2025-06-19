import React from "react";

function Note({ id, title, content, priority, onDelete, onEdit }) {
  function handleDelete() {
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id);
  }

  function getPriorityLabel(p) {
    if (p === 1) return "High";
    if (p === 2) return "Medium";
    return "Low";
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>
        <strong>Priority:</strong> {getPriorityLabel(priority)}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Note;
