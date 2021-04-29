import { error500, error401, errorConnection } from '../alert/http-alert';

export default function handleAxiosErrors(err) {
  if (err.code === 'ECONNABORTED') {
    return errorConnection();
  }
  if (err.response.status === 500) {
    return error500();
  }
  if (err.response.status === 401) {
    return error401();
  }
}
