import customAxios from './customAxios';
import urlInfo from './url';

const { url, port, users } = urlInfo;

const getAllUsers = async (setStateCb, setErrorCb) => {
  try {
    const listOfUsers = await customAxios().get(`${url}:${port}${users}`);
    setStateCb(listOfUsers.data.users);
  } catch (error) {
    setErrorCb(error);
  }
};

export default getAllUsers;
