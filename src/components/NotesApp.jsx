import NewNote from './NewNote'
import { Button, Stack, Box } from '@mui/material';
import { GoPlus } from 'react-icons/go';
import useRandomBg from '../hooks/useRandomBg';
import useNotes from '../hooks/useNotes';

export default function NotesApp() {
  const randomBg = useRandomBg();
  const {notes, addNewNote, deleteNote} = useNotes();

  return (
    <Box>
      <Box mb={2}>
        <Button 
          variant='contained' 
          onClick={addNewNote}
          startIcon={<GoPlus />}
        >
          New Note
        </Button>
      </Box>
      <Stack
        justifyContent='center'
        direction='row'
        flexWrap='wrap'
        gap='5px'
      >
        {notes.map(n => (
          <NewNote 
            onClick={deleteNote} 
            cardBg={randomBg} 
            note={n} 
            key={n.id}
          />
        ))}
      </Stack>
    </Box>
  );
}
