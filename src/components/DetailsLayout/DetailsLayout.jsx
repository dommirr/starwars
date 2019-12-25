import React from 'react';
import PropTypes from 'prop-types';

import LinkMovie from 'components/LinkMovie';
import Back from 'components/Back';
import style from './DetailsLayout.module.css';

const DetailsLayout = ({ title, description = '', details = [], movies = [] }) => (
  <div className={style.DetailsLayout}>
    <div className={style.DetailsLayoutBanner}>
      <div className={style.DetailsLayoutBannerBack}>
        <Back />
      </div>
      <div className={style.DetailsLayoutBannerTitle}>{title}</div>
    </div>
    <div className={style.DetailsLayoutBannerInfo}>
      {
        description && (
          <div className={style.DetailsLayoutBannerDescription}>
            {description}
          </div>
        )
      }

      <div className={style.DetailsLayoutBannerContent}>
        {
          details.map(({ label, value }) => (
            <div key={label} className={style.DetailsLayoutBannerItem}>
              <div className={style.DetailsLayoutBannerItemLabel}>{label}:</div>
              <div className={style.DetailsLayoutBannerItemText}>{value}</div>
            </div>
          ))
        }
      </div>
      {
        movies.length > 0 && (
          <div className={style.DetailsLayoutBannerDetailsLink}>
            <div className={style.DetailsLayoutBannerItemText}>
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

DetailsLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.array,
  movies: PropTypes.array,
};

export default DetailsLayout;