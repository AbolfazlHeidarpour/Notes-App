import React, { useEffect, useState } from 'react';
import { NoteCard, NoteHeader, DeleteIcon, NoteIcon, NoteText, NoteTitle, NoteCardContent } from '../styles/NoteStyle';
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';

export default function NewNote({note, onClick, cardBg}) {
  const [newCardBg, setNewCardBg] = useState();
  const [text, setText] = useState();

  const onChange = e => setText(e.target.value);

  useEffect(() => {
    !newCardBg && setNewCardBg(cardBg);
  }, [newCardBg]);

  return (
    <NoteCard>
      <NoteHeader
        title={<NoteTitle>{note.id}</NoteTitle>}
        avatar={<NoteIcon><MdOutlineNoteAlt /></NoteIcon>}
        action={(
          <DeleteIcon onClick={() => onClick(note.id)}>
            <MdDeleteForever />
          </DeleteIcon>
        )}
        style={{background: newCardBg}}
      />
      <NoteCardContent>
        <NoteText onChange={onChange} value={text}>
          {text}
        </NoteText>
      </NoteCardContent>
    </NoteCard>
  );
}
