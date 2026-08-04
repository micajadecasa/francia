import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AudioPlayer from '../components/AudioPlayer';
import { daysData } from '../data/places';
import './PlaceDetail.css';

export default function PlaceDetail() {
  const { category, day, id } = useParams();
  const navigate = useNavigate();
  
  const dayData = daysData[day];
  const place = dayData?.places.find(p => p.id === id);

  if (!place) {
    return (
      <div className="detail-container">
        <Header />
        <main className="detail-content">
          <h2>Lugar no encontrado</h2>
          <button onClick={() => navigate(-1)} className="back-link">
            Volver
          </button>
        </main>
      </div>
    );
  }

  // Use the first image if available, else a placeholder
  const imageSrc = place.images && place.images.length > 0 ? place.images[0] : '/images/placeholder.png';

  // Select the correct audio based on category
  const audioSrc = category === 'adulto' ? place.audioAdulto : place.audioJuvenil;

  return (
    <div className="detail-container">
      <Header />
      
      <div 
        className="hero-image" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <main className="detail-content">
        <h1 className="place-title">{place.name}</h1>
        
        <div className="place-meta">
          <span className="location-badge">{dayData.title}</span>
        </div>

        <p className="place-description">{place.description}</p>
        
        <div className="player-section">
          <AudioPlayer src={audioSrc} title={`Audioguía: ${place.name}`} />
        </div>
      </main>
    </div>
  );
}
