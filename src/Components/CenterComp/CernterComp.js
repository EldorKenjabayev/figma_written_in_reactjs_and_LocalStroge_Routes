import React, { Component } from 'react'

export default class CernterComp extends Component {
    state = {
        btn:[
            {
                name:'Робототехника'
            },
            {
                name:'Создание игр'
            },
            {
                name:'Web-разработка'
            },
            {
                name:'Мультимедиа'
            },
            {
                name:'Шахматы'
            },
            {
                name:'3D-моделирование и дизайн'
            },
            {
                name:'Английский язык'
            },
            {
                name:'Блогинг'
            },
            {
                name:'Soft skills'
            }
        ]
    }
  render() {
    return (
      <div>
        <h2 style={{
            fontSize:'18px',
            fontWeight:'600',
            paddingTop:'15px'
        }}>Направление</h2>
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'30px',
            paddingTop:'4vh'
        }}>
        {
            this.state.btn.map((item, index) =>(
                <>
                    <button style={{
                        padding:'12px 30px',
                        color:'#000',
                        background:'#fff',
                        fontSize:'16px',
                        fontWeight:'600'
                    }}>
                        {item.name}
                    </button>
                </>
            ))
        }

        </div>

      </div>
    )
  }
}
