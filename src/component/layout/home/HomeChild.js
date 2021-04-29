import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import text from '../../helpers/language/login/text.json';

export default function HomeChild() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Button
      fullWidth
      color='primary'
      variant='contained'
      onClick={handleLogout}
    >
      {text.LOGOUT}
    </Button>
  );
}
