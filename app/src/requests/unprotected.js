import axios from 'axios';

import urlInfo from './url';

const { url, port, login, signup } = urlInfo;

const createNewUser = async (username, email, password, setErrorCb) => {
  try {
    const sendNewUser = await axios.post(`${url}:${port}${signup}`, {
      username,
      email,
      password,
    });
    console.log(sendNewUser.data.user_id);
  } catch (error) {
    setErrorCb(error);
  }
};

const loginUser = async (username, password, setAuthCb, setErrorCb) => {
  try {
    const loginUser = await axios.post(`${url}:${port}${login}`, {
      username,
      password,
    });
    localStorage.setItem('user_token', loginUser.data.token);
    setAuthCb(true);
    console.log(loginUser.data.message);
  } catch (error) {
    setErrorCb(error);
  }
};

export { createNewUser, loginUser };
