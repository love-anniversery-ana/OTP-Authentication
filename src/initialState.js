const jwt = sessionStorage.getItem('jwtToken')
  ? sessionStorage.getItem('jwtToken')
  : null;

const initialState = {
  userVer: { JWT: jwt },
};

export default initialState;
