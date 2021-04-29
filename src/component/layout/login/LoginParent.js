import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PhoneInput from './PhoneInput';
import CodeVerify from './CodeVerify';
import { makeStyles, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { verifyError } from '../../helpers/alert/info-alert';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export default function LoginParent() {
  const classes = useStyles();
  const userNum = useSelector((state) => state.userNum);
  const { numSuccess } = userNum;
  const userVer = useSelector((state) => state.userVer);
  const { verSuccess, verifyMsg } = userVer;
  const history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem('jwtToken')) {
      history.push('/home');
    } else {
      if (verSuccess === true) {
        history.push('/home');
      } else if (verSuccess === false) {
        verifyError(verifyMsg);
      }
    }
  }, [verSuccess, history, verifyMsg]);

  return (
    <Container className={classes.root}>
      {numSuccess === true ? <CodeVerify /> : <PhoneInput />}
    </Container>
  );
}
