import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { makeStyles, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function SplashChild(props) {
  const classes = useStyles();
  const color = props.styles.color;
  const open = props.styles.openLoader;
  const override = props.styles.override;

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <PacmanLoader color={color} loading={open} css={override} size={50} />
    </Backdrop>
  );
}
