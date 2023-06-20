/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import location from "../imgNAV/location.png"
import logo from "../imgNAV/logo.png"
import user from "../imgNAV/user.png"
import "./UserComp.css"
import logoLinks from '../imgNAV/linkspng.png'
import { Link } from 'react-router-dom'
export default class NavComp extends Component {
  state = {
    login: [],
    passvord: []
  }
  render() {
    return (
      <div className='Container'>
        <div className="Naigation">
          <div className="Nav_Logo">
            <img src={logo} alt="img" style={{
              width:'100px'
            }}/>
          </div>
          <div className="Nav_links">
            <ul>
              <li style={{
                display:'flex',
                alignItems:'center',
                gap:'5px'
              }}><img src={logoLinks} alt="img" /> <a href="">Все курсы </a> </li>
              <li><a href="#">Мероприятия</a></li>
              <li><a href="#">Базы знаний</a></li>
              <li><a href="#">Карьера</a></li>
            </ul>
          </div>
          <div className="NavLocation">
            <img src={location} alt="png" />
            <select name="Location" style={{
              padding: '5px 10px 5px 0px',
              border: 'none',
              backgroundColor: '#00093C',
              color: '#FFF',
              borderBlock: 'none',
              fontWeight: '500',
              fontSize: '15px',
              lineHeight: '17px'
            }} >
              <option value="1" className='option'> Нижний Новгород</option>
              <option value="1" className='option'>Нижний Новгород 2</option>
              <option value="1" className='option'>Нижний Новгород 3</option>
            </select>
          </div>
          <div className="RegistrationAndNumber" style={{
            display:'flex',
            justifyContent:'space-between',
            gap:'4vw',
            alignItems:'center'
          }}>
            <a href="telephone">8 800 950-33-98 </a>
            <div className="divAcount">
              <Link to={'/sign_in'}>
              <a href="#" style={{
              display:'flex',
              justifyContent:'space-between',
              gap:'.5vw',
              alignItems:'center'
            }}>
                <img src={user} alt="img" style={{
                  width:'15px',
                  height:'15px'
                }}/>
                <p>Войти</p>
              </a>
              </Link>
            </div>
          </div>
        </div>

      </div >
    )
  }
}
