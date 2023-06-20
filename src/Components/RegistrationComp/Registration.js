import React, { Component } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

export default class Registration extends Component {
  state = {
    email: '',
    name: '',
    surname: '',
    password: '',
  };

  addEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  addName = (event) => {
    this.setState({ name: event.target.value });
  };

  addSurname = (event) => {
    this.setState({ surname: event.target.value });
  };

  addPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  preventDefault = (event) => {
    event.preventDefault();
  };

  register = (event) => {
    const { email, name, surname, password } = this.state;
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    const newRegistration = { email, name, surname, password };
    registrations.push(newRegistration);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    this.setState({
      email: '',
      name: '',
      surname: '',
      password: '',
    });

    this.preventDefault(event);
  };

  render() {
    const { email, name, surname, password } = this.state;

    return (
      <div id="Registration">
        <div
          className="LoginPassWord"
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h3>Регистрация</h3>
          <form
            action="LoginPassword"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <input type="email" placeholder="Почта" value={email} onChange={this.addEmail} required />
            <br />
            <input type="text" placeholder="Имя" name="name" value={name} onChange={this.addName} required />
            <br />
            <input type="text" placeholder="Фамилия" name="surname" value={surname} onChange={this.addSurname} required />
            <br />
            <input type="password" placeholder="Пароль" name="password" value={password} onChange={this.addPassword} required />
            <br />
            <button type="submit">Продолжить</button>
            <Link to="/sign_in">Войти в аккаунт</Link>
          </form>
        </div>
      </div>
    );
  }
}
