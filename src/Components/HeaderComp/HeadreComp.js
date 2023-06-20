import React, { Component } from 'react'
import children1 from  '../imgNAV/children (1).png'
import children2 from  '../imgNAV/children.png'
import olds from '../imgNAV/family.png'
import './header.css'

export default class HeadreComp extends Component {
  render() {
    return (
      <div style={{
        width:'87%',
        margin:"auto"
      }}>
        <h1 style={{
          fontSize:'36px',

        }}>Все программы обучения</h1>
        <div style={{
          width:'100%',
          display:'flex',
          justifyContent:'end',
          paddingRight:'10%',
          alignItems:'center',
          paddingTop:'7vh',
          gap:'10vw',

        }}>
            <div className="boxHeader" img={children1}>
              <img src={children2} alt="" />
              <div>
                <h4>Дети</h4>
                <p>8 — 14 лет</p>
              </div>
            </div>
            <div className="boxHeader">
              <img src={children1} alt="" />
              <div>
                <h4>Подростки</h4>
                <p>14 — 18 лет</p>
              </div>
            </div>
            <div className="boxHeader">
              <img src={olds} alt="" />
              <div>
                <h4>Взрослые</h4>
                <p>18 — ∞ </p>
              </div>
            </div>
        </div>
        <hr />
      </div>
    )
  }
}
