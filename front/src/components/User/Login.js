import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import '../../styles/Login.css';
// import { setUserLocalStorage } from '../utils/auxLocalStorage';
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
    console.log('xablau');
    event.preventDefault();
    history.push('/register');
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('login');
    const dataLogin = { email, password }
    try {
      // const { data } = await apiLoginUser('/user/auth', dataLogin);
  
      // setUserLocalStorage({ email: data.user.email, token: data.user.token })
      // navigate("/home");

    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        console.log(error);
        setErr(error.message)

      } else {
        console.log(error);
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
    <form className="form-login">
      <fieldset>
        <legend>My Store</legend>
        <label>
          Email:
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input
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
            onClick={(handleRegistration)}
          >
            Registrar
          </button>
          {
            err ?
              (
                <span
                  data-testid="common_register__element-invalid-login"
                >
                  {err}
                </span>
              ) : ''
          }
        </div>
      </fieldset>
    </form>
  );
};

export default Login;