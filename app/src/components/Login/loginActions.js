const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginUser = (email, password) => {
  const action = {
    type: LOGIN_SUCCESS,
    email,
    password
  };
  return action;
};
