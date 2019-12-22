import React from 'react';
import Loading from 'components/Loading';
import styles from './ContentLoading.module.css';

const ContentLoading = () => (
  <div className={styles.ContentLoading}>
    <Loading />
  </div>
);

export default ContentLoading;
