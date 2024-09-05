import React from 'react';
import styles from '../styles/Slide.module.css';  // Assuming CSS module usage

const Slide = ({ id, title, children }) => {
  return (
    <div className={styles.slide} id={id}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Slide;

