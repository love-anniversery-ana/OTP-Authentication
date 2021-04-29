import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import theme from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
