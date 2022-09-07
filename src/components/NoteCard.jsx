import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';

const NoteCard = ({ note, deleteNote }) => {
  const ylow = yellow[700];
  const grn = green[500];
  const bl = blue[500];
  const pnk = pink[500];
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor:
                  note.category == 'work'
                    ? ylow
                    : note.category == 'money'
                    ? grn
                    : note.category == 'todos'
                    ? pnk
                    : bl,
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => deleteNote(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
