import React, { useEffect, useState } from 'react';
import '../styles/Header.module.css';  // Assuming CSS module or regular CSS file

const Header = () => {
  const [backgroundStyle, setBackgroundStyle] = useState('');

  useEffect(() => {
    const time = new Date().getHours();
    let background = '';
    if (time >= 20 || time < 6) {
      background = 'url("/path/to/night.jpg")';
    } else if (time >= 6 && time < 8) {
      background = 'url("/path/to/dawn.jpg")';
    } else if (time >= 8 && time < 20) {
      background = 'url("/path/to/day.jpg")';
    } else if (time >= 16 && time < 20) {
      background = 'url("/path/to/sunset.jpg")';
    }
    setBackgroundStyle(background);
  }, []);

  return (
    <header style={{ background: `${backgroundStyle} no-repeat center center / cover` }}>
      <div className="header-container">
        <img src="/path/to/photo.png" alt="Ruslan Kain's photo" />
        <div className="about-section">
          <h2>About Ruslan Kain</h2>
          {/* Description here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

