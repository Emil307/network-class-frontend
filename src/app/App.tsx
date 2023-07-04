import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Join from '../pages/Join';
import Profile from '../pages/Profile';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default App;
