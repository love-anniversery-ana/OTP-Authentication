import Swal from 'sweetalert2';
import text from '../language/errors/text.json';

export const error500 = () => {
  Swal.fire({
    title: `${text.TITLE_500}`,
    text: `${text.TEXT_500}`,
    icon: 'error',
    confirmButtonText: `${text.CONFIRM_TEXT}`,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
};

export const error401 = () => {
  Swal.fire({
    title: `${text.TITLE_401}`,
    text: `${text.TEXT_401}`,
    icon: 'error',
    confirmButtonText: `${text.CONFIRM_TEXT}`,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = '/login';
    }
  });
};

export const errorConnection = () => {
  Swal.fire({
    title: `${text.TITLE_CONNECTION}`,
    text: `${text.TEXT_CONNECTION}`,
    icon: 'error',
    confirmButtonText: `${text.CONFIRM_TEXT}`,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
};
