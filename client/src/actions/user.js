import axios from 'axios';
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (user) => {
  return { type: LOGIN, user }
}

export const handleRegister = (user, history) => {
  return(dispatch) => {
    axios.post('/api/auth', user)
      .then( res => {
        dispatch(login(res.data.data));
        history.push('/');
      })
      .catch( res => {
        console.log(res);
    });
  }
}

export const handleLogout = (history) => {
  return(dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        dispatch({ type: LOGOUT });
        history.push('/login');
      })
      .catch( res => {
        console.log(res);
      });
    }
}

export const handleLogin = (user, history) => {
  return(dispatch) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        dispatch(login(res.data.data));
        history.push('/');
      })
      .catch( res => {
        console.log(res);
      })
  }
}