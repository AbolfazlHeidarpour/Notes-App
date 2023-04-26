import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from "@mui/system";

export const NoteCard = styled(Card)({
  width: 300,
  height: 200
});

export const NoteHeader = styled(CardHeader)({
  background: 'dodgerblue'
});

export const DeleteIcon = styled('span')({
  cursor: 'pointer',
  color: "black",
  fontSize: '24px',
  '&:hover': {
    color: red[800]
  },
  transition: 'all 0.3s ease'
});

export const NoteIcon = styled('span')({
  color: "black",
  fontSize: '24px',
});

export const NoteText = styled('textarea')({
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%'
});

export const NoteTitle = styled(Typography)({
  width: '200px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const NoteCardContent = styled(CardContent)({
  height: 'calc(100% - 100px)'
});