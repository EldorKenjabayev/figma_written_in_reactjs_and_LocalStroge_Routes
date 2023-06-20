import React, { Component } from 'react'
import './catigory.css'

export default class Catigory2 extends Component {
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
        <div  style={{
            paddingTop:'20px',
            width:'100%'
        }}>
          <h4>Тип обучения</h4>
          <div className='Catigory2'>
            <ul>
                <li>
                <label htmlFor="lyuboy">
              <input
                type="radio"
                id="lyuboy"
                value="Любой"
                name="difficulty"
                checked={this.state.difficulty === 'Любой'}
                onChange={this.handleDifficultyChange}
              /> Любой
            </label>
                </li>
                <li>
                <label htmlFor="prof">
              <input
                type="radio"
                id="prof"
                value="Профессия"
                name="difficulty"
                checked={this.state.difficulty === 'Профессия'}
                onChange={this.handleDifficultyChange}
              /> Профессия
            </label>
                </li>
                <li>
                <label htmlFor="course">
              <input
                type="radio"
                id="cource"
                value="Курс"
                name="difficulty"
                checked={this.state.difficulty === 'Курс'}
                onChange={this.handleDifficultyChange}
              /> Курс
            </label>
                </li>
            </ul>

          </div>
        </div>
      );
  }
}
