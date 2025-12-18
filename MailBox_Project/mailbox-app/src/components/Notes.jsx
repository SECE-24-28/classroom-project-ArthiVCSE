import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import API from '../services/api';

const Notes = ({ onClose }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const { data } = await API.get('/notes');
      setNotes(data);
    } catch (err) {
      console.error('Error loading notes');
    }
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    
    try {
      await API.post('/notes', { text: newNote });
      setNewNote('');
      loadNotes();
    } catch (err) {
      alert('Error adding note');
    }
  };

  return (
    <div className="side-panel">
      <div className="panel-header">
        <h3 className="panel-title">Notes</h3>
        <button onClick={onClose} className="icon-btn" style={{ color: '#374151' }}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        {notes.map(note => (
          <div key={note._id} className="note-item">
            <p className="note-text">{note.text}</p>
            <p className="note-date">
              {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a note..."
        className="panel-textarea"
        rows="3"
      />
      <button onClick={addNote} className="btn-add-note">
        Add Note
      </button>
    </div>
  );
};

export default Notes;