import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import Home from './pages/Home';
import Category from './pages/Category';
import Day from './pages/Day';
import PlaceDetail from './pages/PlaceDetail';
import './index.css';

function BackButtonHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = async (event) => {
      // If we are not at the root level, go back in history
      if (window.location.pathname !== '/') {
        navigate(-1);
      } else {
        // If at root, exit app
        await CapacitorApp.exitApp();
      }
    };

    let backButtonListener = CapacitorApp.addListener('backButton', handleBackButton);

    return () => {
      backButtonListener.then(listener => listener.remove());
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <BackButtonHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:day" element={<Day />} />
        <Route path="/:category/:day/place/:id" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
