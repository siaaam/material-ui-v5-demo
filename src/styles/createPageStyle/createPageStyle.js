import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import { styled } from '@mui/material/styles';

export const MyButton = styled(Button)`
  font-size: 60px;
  background-color: red;
  border-radius: 40px;
  color: green;

  :hover {
    background-color: blue;
  }
`;

export const MyTitle = styled(Typography)`
  text-decoration: underline;
  color: pink;

  :hover {
    color: green;
  }
`;
