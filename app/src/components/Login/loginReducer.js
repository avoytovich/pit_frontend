const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
};

export default login;
