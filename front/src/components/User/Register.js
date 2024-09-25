import React, { useState } from 'react';
import Header from '../Header.js';
import { regRegisterUser } from '../../services/requests.js';
import { useHistory } from "react-router-dom";
import '../../styles/Register.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  
  const history = useHistory();

  const validateInput = () => {
    const MIN_NAME = 12;
    const MIN_PASSWORD = 6;
    const REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    const nameTest = name.length < MIN_NAME;
    const passwordTest = password.length < MIN_PASSWORD;
    const emailTest = !(REGEX.test(email));

    return !(!nameTest && !emailTest && !passwordTest);
  }

  const handleSaveuser = async (e) => {
    try {
      const dataUser = {
        name,
        email,
        password,
        role: 'customer'
      }
    
      
      await regRegisterUser('/register/user', dataUser);
      setErr(false)
      history.push('/');

    } catch (error) {
      console.log(error.message);
      setErr(error.response.data.message)
    }
  }

  return (
    <>
    <Header />
      <form className="register-form">
        <div className="register-container">
          <h1 className="register-title">Crie sua conta</h1>
          <label htmlFor="nameInput" className="label-form">
            Nome
            <input
              placeholder="Seu nome"
              type="text"
              name="nameInput"
              className="name-input"
              data-testid="common_register__input-name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>

          <label htmlFor="emailInput" className="label-form">
            Email
            <input
              placeholder="seu-email@site.com.br"
              type="email"
              name="emailInput"
              className="email-input"
              data-testid="common_register__input-email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>

          <label htmlFor="PasswordInput" className="label-form">
            Senha
            <input
              placeholder="*******"
              type="password"
              name="passwordInput"
              className="password-input"
              data-testid="common_register__input-password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>

          <button
            className="btn-register"
            type="button"
            name="submitBTN"
            id="loggin-submit-btn"
            data-testid="common_register__button-register"
            disabled={ validateInput() }
            onClick={handleSaveuser}
          >
            CADASTRAR
          </button>
          {
            err ?
              (
                <span
                  data-testid="common_register__element-invalid_register"
                >
                  {err}
                </span>
              ) : ''
          }
        </div>
      </form>
    </>
  );
};

export default Registration;