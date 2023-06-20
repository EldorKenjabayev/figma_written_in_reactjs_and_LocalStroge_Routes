import React, { Component } from 'react'
import imgBox from '../imgNAV/Group 815.png'
export default class Box extends Component {
    state = {

      color:['#C7EEFF', '#FFCE94', '#FFE38E', '#DDDDFF', '#B8EFCF', '#C7EEFF', '#C5DDFF', '#FFE9A8', '#FFEEF6', '#DDDDFF'],
        boxs:[
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
            {
                title:'Программа',
                img:imgBox,
                titleBox:'«Разработка мобильных приложений»',
                textBox:'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
                date:'24 месяца'
            },
        ]
    }
  render() {
    return (
      <div style={{
        paddingTop:'70px',
        display:'flex',
        flexWrap:'wrap',
        gap:'1.5vw',
      }}>
        {
          this.state.boxs.map((item, index) =>(
            <div className="box" key={index} style={{
              width:'45%',
              padding:'25px',
              border:'1px solid transparent',
              borderRadius:'20px',
              backgroundColor: this.state.color[index % this.state.color.length],
            }}>
              <p style={{
                fontSize:'13px',
                lineHeight:'16px',
                fontWeight:'400',
                color:'#4F4F4F',
                paddingBottom:'15px'
              }}>{item.title}</p>
              <div style={{
                display:'flex',
                alignItems:"center",
                gap:'10px',
                paddingBottom:'20px'
              }}>
                <img src={item.img} alt="" style={{
                  width:'25px'
                }} />
                <h2 style={{
                  fontSize:'19px',
                  lineHeight:'22px',
                  color:'#00093C',
                  fontWeight:'500',
                  width:'75%'
                }}>{item.titleBox}</h2>
              </div>
              <p style={{
                width:'85%',
                fontSize:'13px',
                lineHeight:'18px',
                fontWeight:'400',
                color:'#4F4F4F'
              }}>{item.textBox}</p>
              <p style={{
                fontSize:'12px',
                lineHeight:'18px',
                fontWeight:'400',
                paddingTop:'25px'
              }}>{item.date}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
