import ErrorGenerator from '../../utils/ErrorGenerator';
import ILogin from '../../interfaces/ILogin';

export default (login: ILogin) => {
  if (!login.email || !login.password) {
    throw new ErrorGenerator(400, 'All fields must be filled');
  }
};
