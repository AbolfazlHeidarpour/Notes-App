import { useState } from 'react';
import { v4 } from 'uuid';

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter(n => !n.id && (n.id = v4()));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  return {notes, addNewNote, deleteNote};
}