import React from 'react';
import LinkMovie from 'components/LinkMovie';
import './styles.css';

const DetailsLayout = ({ title, description = '', details = [], movies = [] }) => (
  <div className="content-content">
    <div className="banner">
      <div className="title">{title}</div>
    </div>
    <div className="info">
      {
        description && (
          <div className="description">
            {description}
          </div>
        )
      }

      <div className="details-content">
        {
          details.map(({ label, value }) => (
            <div key={value} className="details-item">
              <div className="item-label">{label}:</div>
              <div className="item-text">{value}</div>
            </div>
          ))
        }
      </div>
      {
        movies.length > 0 && (
          <div className="details-links">
            <div className="item-text">
              Películas en las que apareció:
            </div>
            {movies.map(movie => (
              <LinkMovie key={movie} id={movie} />
            ))}
          </div>
        )
      }

    </div>
  </div>
);

export default DetailsLayout;