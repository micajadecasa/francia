import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { daysData } from '../data/places';
import './Day.css';

export default function Day() {
  const { category, day } = useParams();
  const navigate = useNavigate();

  const dayData = daysData[day];

  if (!dayData) {
    return (
      <div className="day-container">
        <Header />
        <main className="day-content">
          <h2>Día no encontrado</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="day-container">
      <Header />
      <main className="day-content">
        <h2 className="day-title">{dayData.title}</h2>
        <p className="day-subtitle">Audioguías disponibles</p>
        
        <div className="places-list">
          {dayData.places.map((place, index) => (
            <div 
              key={place.id}
              className="place-item" 
              onClick={() => navigate(`/${category}/${day}/place/${place.id}`)}
              role="button"
              tabIndex={0}
            >
              <div className="place-number">{index + 1}</div>
              <div className="place-info">
                <h3>{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
