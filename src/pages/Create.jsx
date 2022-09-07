import React from 'react';
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleErr] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleErr(false);
    setDetailsError(false);

    if (title === '') {
      setTitleErr(true);
    }

    if (details === '') {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        body: JSON.stringify({ title, details, category }),
        headers: { 'Content-type': 'application/json' },
      }).then(() => navigate('/'));
    }
  };

  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="textPrimary">
        Create A New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          sx={{ marginBottom: '20px', marginTop: '20px' }}
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          sx={{ marginBottom: '20px', marginTop: '20px' }}
          error={detailsError}
        />

        <FormControl
          sx={{ marginBottom: '20px', marginTop: '20px', display: 'block' }}
        >
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
              color="secondary"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
              color="secondary"
            />
            <FormControlLabel
              value="reminder"
              control={<Radio color="secondary" />}
              label="Reminder"
              color="secondary"
            />
            <FormControlLabel
              value="works"
              control={<Radio color="secondary" />}
              label="Works"
              color="secondary"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<EastIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
