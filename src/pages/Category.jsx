import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { daysData } from '../data/places';
import './Category.css';

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Validate category
  if (category !== 'adulto' && category !== 'juvenil') {
    return (
      <div className="category-container">
        <Header />
        <main className="category-content">
          <h2>Categoría no encontrada</h2>
        </main>
      </div>
    );
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="category-container">
      <Header />
      <main className="category-content">
        <h2 className="category-title">{categoryName}</h2>
        <p className="category-subtitle">Elige el día de tu visita</p>
        
        <div className="day-cards">
          {Object.values(daysData).map((day) => (
            <div 
              key={day.id}
              className="day-card" 
              style={{ backgroundImage: `url(${day.image})` }}
              onClick={() => navigate(`/${category}/${day.id}`)}
              role="button"
              tabIndex={0}
            >
              <div className="card-overlay"></div>
              <h3>{day.title}</h3>
              <p>{day.places.length} audioguías</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
