import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AudioPlayer from '../components/AudioPlayer';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Header />
      <main className="home-content">
        <h2 className="welcome-title">Si, Si, Si, nos vamos a París</h2>
        <p className="welcome-subtitle">INTRO ADULTO</p>
        <div className="home-intro-player">
          <AudioPlayer src="/audio/intro-francia.mp3" title="Introducción a Francia" />
        </div>
        <p className="welcome-subtitle">INTRO JUVENIL</p>
        <div className="home-intro-player">
          <AudioPlayer src="/audio/intro-juvenil-francia.mp3" title="Introducción a Francia" />
        </div>
        <p className="welcome-subtitle">Selecciona tu experiencia</p>


        <div className="category-cards">
          <div
            className="category-card adulto"
            onClick={() => navigate('/adulto')}
            role="button"
            tabIndex={0}
          >
            <div className="card-overlay"></div>
            <h3>Adulto</h3>
            <p>Descubre la historia profunda</p>
          </div>
          <div
            className="category-card juvenil"
            onClick={() => navigate('/juvenil')}
            role="button"
            tabIndex={0}
          >
            <div className="card-overlay"></div>
            <h3>Juvenil</h3>
            <p>Una aventura inolvidable</p>
          </div>
        </div>
      </main>
    </div>
  );
}
