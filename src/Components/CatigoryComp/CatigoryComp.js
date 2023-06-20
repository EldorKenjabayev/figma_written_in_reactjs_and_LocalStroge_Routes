import React, { Component } from 'react';
import './catigory.css'

export default class CategoryComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: ''
    };
  }

  handleDifficultyChange = (event) => {
    this.setState({ difficulty: event.target.value });
  }

  render() {
    return (
      <div style={{
        paddingTop:"15px"
      }}>
        <h4>Уровень сложности</h4>
        <div className='Catigory'>
            <ul>
                <li>
                <label htmlFor="novice">
            <input
              type="radio"
              id="novice"
              value="Новичок"
              name="difficulty"
              checked={this.state.difficulty === 'Новичок'}
              onChange={this.handleDifficultyChange}
            /> Новичок
          </label>
                </li>
                <li>
                <label htmlFor="user">
            <input
              type="radio"
              id="user"
              value="Пользователь"
              name="difficulty"
              checked={this.state.difficulty === 'Пользователь'}
              onChange={this.handleDifficultyChange}
            /> Пользователь
          </label>
                </li>
                <li>
                <label htmlFor="professional">
            <input
              type="radio"
              id="professional"
              value="Профессионал"
              name="difficulty"
              checked={this.state.difficulty === 'Профессионал'}
              onChange={this.handleDifficultyChange}
            /> Профессионал
          </label>
                </li>
                <li>
                <label htmlFor="cheater">
            <input
              type="radio"
              id="cheater"
              value="Читер"
              name="difficulty"
              checked={this.state.difficulty === 'Читер'}
              onChange={this.handleDifficultyChange}
            /> Читер
          </label>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}
