import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import text from '../language/alerts/text.json';

export const validNumAlert = () => {
  toast.info(`âšī¸ ${text.CORRECT_NUMBER} `, {
    position: 'bottom-center',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const sentSMS = (msg) => {
  toast.success(`đ ${msg}`, {
    position: 'bottom-center',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const verifyError = (msg) => {
  toast.error(`đ  ${msg}`, {
    position: 'bottom-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const resendCode = () => {
  toast.dark(`đ ${text.CODE_RESEND}`, {
    position: 'bottom-left',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
