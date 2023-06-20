/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './LoginUser.css';
import { Link } from 'react-router-dom';

export default class LoginUser extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    loginError: false,
  };

  componentDidMount() {
    // Получение сохраненных данных из localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // Обновление состояния компонента с полученными данными
    this.setState({
      userEmail: savedEmail || '',
      userPassword: savedPassword || '',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { userEmail, userPassword } = this.state;

    // Проверка введенных данных
    if (
      userEmail === localStorage.getItem('email') &&
      userPassword === localStorage.getItem('password')
    ) {
      // Данные совпадают - выполнение необходимой логики, например, перенаправление на другую страницу
      console.log('Авторизация успешна');
    } else {
      // Данные не совпадают - отображение ошибки
      this.setState({ loginError: true });
    }
  };

  render() {
    const { userEmail, userPassword, loginError } = this.state;

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
            onSubmit={this.handleSubmit} // Добавляем обработчик события onSubmit
          >
            <input
              type="email"
              placeholder="Почта"
              value={userEmail}
              onChange={(event) => this.setState({ userEmail: event.target.value })}
              required
            />{' '}
            <br />
            <input
              type="password"
              placeholder="Пароль"
              value={userPassword}
              onChange={(event) => this.setState({ userPassword: event.target.value })}
              required
            />{' '}
            <br />
            {loginError && <p style={{ color: 'red' }}>Неверный email или пароль</p>}
            <button type="submit">Продолжить</button>
            <Link to="/sign_up">        
            <a href="/">Регистрация</a>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
