import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Components/RegistrationComp/Registration';
import NavComp from './Components/NavComp/NavComp';
import LoginUser from './Components/LoginComp/LoginUser';
import HeadreComp from './Components/HeaderComp/HeadreComp';
import img from './Components/imgNAV/children (1).png';
import CatigoryComp from './Components/CatigoryComp/CatigoryComp';
import Catigory2 from './Components/CatigoryComp2/Catigory2';
import CernterComp from './Components/CenterComp/CernterComp';
import Box from './Components/BoxComp/Box';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: '#E5E5E5' }}>
          <NavComp />
          <Routes>
            <Route path="/sign_in" element={<LoginUser />} />
            <Route path="/sign_up" element={<Registration />} />
          </Routes>
          <HeadreComp />
          <div
            style={{
              width: '87%',
              margin: 'auto',
              display: 'flex',
              gap: '2vw',
            }}
          >
            <div style={{ width: '25%', height: '100%' }}>
              <CatigoryComp />
              <Catigory2 />
            </div>
            <div style={{ width: '75%' }}>
              <CernterComp />
              <Box />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
