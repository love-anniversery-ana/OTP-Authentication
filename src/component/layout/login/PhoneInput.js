import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  FormControl,
  FormHelperText,
  makeStyles,
  InputAdornment,
  Grid,
} from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import text from '../../helpers/language/login/text.json';
import { useDispatch } from 'react-redux';
import { phoneInput } from '../../redux/actions/authActions';
import { validNumAlert } from '../../helpers/alert/info-alert';
import { CircleLoader } from 'react-spinners';

const useStyles = makeStyles((theme) => ({
  helperTxt: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary.main,
    fontSize: theme.spacing(2),
  },
  textField: {
    fontSize: theme.spacing(2),
  },
  input: {
    color: theme.palette.text.primary,
  },
}));

export default function PhoneInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [submitBtn, setSubmitBtn] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleNumberSubmit = () => {
    setShowLoader(true);
    const username = number;
    dispatch(phoneInput(username));
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    if (value.length === 11) {
      setSubmitBtn(false);
    } else if (value.length <= 10) {
      setSubmitBtn(true);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem('jwtToken')) {
      validNumAlert(text.NUMBER_WITHOUT);
    }
  }, [dispatch]);

  return (
    <form>
      <FormControl fullWidth>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='baseline'
        >
          <TextField
            required
            fullWidth
            className={classes.textField}
            autoFocus
            variant='outlined'
            label={text.ENTER_YOUR_PHONE}
            value={number}
            onChange={handleNumberChange}
            inputProps={{ maxLength: 11 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneIphoneIcon color='primary' />
                </InputAdornment>
              ),
              className: classes.input,
            }}
          />
        </Grid>
        <FormHelperText margin='dense' className={classes.helperTxt}>
          {text.CLICK_ON_SUBMIT}
        </FormHelperText>

        <Button
          onClick={handleNumberSubmit}
          variant='contained'
          color='secondary'
          disabled={submitBtn}
        >
          {showLoader === false ? (
            <>
              <CheckBoxIcon color='primary' />
              {text.SUBMIT}
            </>
          ) : (
            <CircleLoader loading={true} size={25} color={'#F44336'} />
          )}
        </Button>
      </FormControl>
    </form>
  );
}
