import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Registration from './Components/RegistrationComp/Registration';
import NavComp from './Components/NavComp/NavComp';
import LoginUser from './Components/LoginComp/LoginUser';
import HeadreComp from './Components/HeaderComp/HeadreComp';
import img from './Components/imgNAV/children (1).png';
import CatigoryComp from './Components/CatigoryComp/CatigoryComp';
import Catigory2 from './Components/CatigoryComp2/Catigory2';
import CernterComp from './Components/CenterComp/CernterComp';
import Box from './Components/BoxComp/Box';

export default function App() {
  const location = useLocation();
  const { pathname } = location;

  const shouldHideComponents = ['/sign_in', '/sign_up'].includes(pathname);

  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <NavComp />
      <Routes>
        <Route path="/sign_in" element={<LoginUser />} />
        <Route path="/sign_up" element={<Registration />} />
      </Routes>
      {!shouldHideComponents && <HeadreComp />}
      <div style={{
        display:'flex'
      }}>
      {!shouldHideComponents && (
        <div style={{ width: '25%', height: '100%', marginLeft:'6%' }}>
          <CatigoryComp />
          <Catigory2 />
        </div>
      )}
      {!shouldHideComponents && (
        <div style={{ width: '75%' }}>
          <CernterComp />
          <Box />
        </div>
      )}
      </div>
    </div>
  );
}
