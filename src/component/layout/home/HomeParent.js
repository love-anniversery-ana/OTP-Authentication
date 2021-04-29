import React from 'react';
import HomeChild from './HomeChild';
import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default function HomeParent() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <HomeChild />
    </Container>
  );
}
