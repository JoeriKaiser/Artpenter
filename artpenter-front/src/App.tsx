import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout/MainLayout';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import HomeScreen from './screens/Home/HomeScreen';
import PaintingScreen from './screens/PaintingScreen/PaintingScreen';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/peintures" element={<PaintingScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
