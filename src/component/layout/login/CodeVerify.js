import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import text from '../../helpers/language/login/text.json';
import {
  Button,
  FormControl,
  FormHelperText,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { sentSMS, resendCode } from '../../helpers/alert/info-alert';
import OtpInput from 'react-otp-input';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { codeVerify, codeResend } from '../../redux/actions/authActions';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  helperTxt: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary.light,
    fontSize: theme.spacing(2),
  },
  input: {
    width: '2rem !important',
    height: '2rem !important',
    fontSize: theme.spacing(3),
  },
}));

export default function CodeVerify() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userNum = useSelector((state) => state.userNum);
  const { username, numberMsg } = userNum;
  const [otp, setOtp] = useState('');
  const [resendBtn, setResendBtn] = useState(true);
  const [submitBtn, setSubmitBtn] = useState(true);

  useEffect(() => {
    countdownForResendCode(10);
    sentSMS(numberMsg);
  }, [dispatch, numberMsg]);

  const handleOtpChange = (otp) => {
    setOtp(otp);
    if (otp.length === 5) {
      setSubmitBtn(false);
    } else if (otp.length <= 4) {
      setSubmitBtn(true);
    }
  };

  const handleCodeVerify = () => {
    dispatch(codeVerify(username, otp));
  };

  const handleCodeResend = () => {
    dispatch(codeResend(username));
    countdownForResendCode(10);
    resendCode();
    setOtp('');
    setResendBtn(true);
  };

  const countdownForResendCode = (timeLeft) => {
    const element = document.getElementById('countdown');
    if (element) {
      var downTime = setInterval(function () {
        if (timeLeft <= 0) {
          clearInterval(downTime);
          element.innerHTML = `${text.FINISHED}`;
          setResendBtn(false);
        } else {
          element.innerHTML = timeLeft + ` ${text.SECONDS_REMAINING}`;
        }
        timeLeft -= 1;
      }, 1000);
    }

    return timeLeft;
  };

  return (
    <form>
      <FormControl fullWidth>
        <Grid container direction='row' justify='center' alignItems='baseline'>
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={5}
            separator={<span style={{ color: '#F9A639' }}>-</span>}
            placeholder='*****'
            isInputNum
            isInputSecure
            inputStyle={classes.input}
          />
        </Grid>
        <FormHelperText
          margin='dense'
          id='countdown'
          className={classes.helperTxt}
        ></FormHelperText>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='baseline'
        >
          <Button
            variant='outlined'
            color='primary'
            onClick={handleCodeResend}
            disabled={resendBtn}
          >
            <ReplayIcon />
            {text.RESEND}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={handleCodeVerify}
            disabled={submitBtn}
          >
            <LockOpenIcon />
            {text.CONTINUE}
          </Button>
        </Grid>
      </FormControl>
    </form>
  );
}
