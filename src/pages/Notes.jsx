import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch('http://localhost:8000/notes');
    const data = await response.json();
    setNotes(data);
  };

  const deleteNote = async (id) => {
    // delete from server
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    });

    // update ui with update server data
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const breakpoint = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
