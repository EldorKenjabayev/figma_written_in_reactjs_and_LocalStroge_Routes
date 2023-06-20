import React, { Component } from 'react';
import './LoginUser.css';
import { Link, Navigate } from 'react-router-dom';

export default class LoginUser extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    loginError: false,
    loggedIn: false,
  };

  componentDidMount() {
    const savedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
    this.setState({
      registrations: savedRegistrations,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { userEmail, userPassword, registrations } = this.state;
    const foundRegistration = registrations.find(
      (registration) => registration.email === userEmail && registration.password === userPassword
    );

    if (foundRegistration) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loginError: true });
    }
  };

  render() {
    const { userEmail, userPassword, loginError, loggedIn } = this.state;

    if (loggedIn) {
      return <Navigate to="/" replace />;
    }

    return (
      <div>
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
          <h3>Войти в аккаунт</h3>
          <form
            action="LoginPassword"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            onSubmit={this.handleSubmit}
          >
            <input
              type="email"
              placeholder="Почта"
              value={userEmail}
              onChange={(event) => this.setState({ userEmail: event.target.value })}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Пароль"
              value={userPassword}
              onChange={(event) => this.setState({ userPassword: event.target.value })}
              required
            />
            <br />
            {loginError && <p style={{ color: 'red' }}>Неверный email или пароль</p>}
            <button type="submit">Продолжить</button>
            <Link to="/sign_up">Регистрация</Link>
          </form>
        </div>
      </div>
    );
  }
}
