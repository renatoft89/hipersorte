import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Sorte from '../../img/sorte.png';

import '../../styles/Login.css';
// import Header from '../Header';
import { addUserLocal } from '../../services/localStorage';
// import { setUserLocalStorage } from '../utils/auxLocalStorage';
import { authUser } from '../../services/requests';
// import { apiLoginUser } from '../utils/axiosToApi';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    history.push('/register');
  };

  const handleLogin = async (event) => {
    
    event.preventDefault();
    const dataLogin = { email, password }
    try {
      const { user } = await authUser('/login/auth', dataLogin);
      addUserLocal({ name: user.name, email: user.email, token: user.token, role: user.role})
      history.push("/");

    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        console.log(error);
        setErr(error.message)
      } else {
        setErr(error.response.data.message)
      }
    }
  };

  const validateInput = () => {
    const MIN_PASSWORD = 6;
    const REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    const passwordTest = password.length < MIN_PASSWORD;
    const emailTest = !(REGEX.test(email));

    return !(!emailTest && !passwordTest);
  }

  return (
    <>
    <form className="form-login">
      <fieldset className="fieldset-login">
        {/* <legend className="legend-login">Hipersorte</legend> */}
        <h1 className="login-h1">Hipersorte</h1>
        <label htmlFor='email'>
          <img
            className="logo-sorte"
            src={Sorte}
            alt="sorte-logo"
          />
          Email:
          <input
            type="email"
            className="input-email"
            value={email}
            name="email"
            onChange={handleChange} />
          Senha:
          <input
            className='input-password'
            type="password"
            value={password}
            name='password'
            onChange={handleChange} />
        </label>
        <div className="button-container">
          <button
            type="submit"
            onClick={handleLogin}
            disabled={validateInput()}
            className="button-login"
          >Entrar</button>
          <button
            type="submit"
            className="button-register"
            onClick={(handleRegistration)}
          >
            Registrar
          </button>
          {err ?
            (
              <span
                className="error-login"
              >
                {err}
              </span>
            ) : ''}
        </div>
      </fieldset>
    </form></>
  );
};

export default Login;