import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ClockFace({ imageSrc, size = 180 }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hours = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5 + time.getSeconds() * (0.5 / 60);
  const minutes = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const seconds = time.getSeconds() * 6;

  return (
    <div className="rsvp-clock-face" style={{ '--clock-size': `${size}px` }}>
      <div className="rsvp-clock-face-inner">
        {imageSrc ? (
          <img src={imageSrc} alt="Clock face" className="rsvp-clock-face-image" />
        ) : (
          <div className="rsvp-clock-face-placeholder" aria-hidden="true">
            <span>Clock</span>
          </div>
        )}

        <div
          className="rsvp-clock-hand rsvp-clock-hour"
          style={{ transform: `translateX(-50%) rotate(${hours}deg)` }}
        />
        <div
          className="rsvp-clock-hand rsvp-clock-minute"
          style={{ transform: `translateX(-50%) rotate(${minutes}deg)` }}
        />
        <div
          className="rsvp-clock-hand rsvp-clock-second"
          style={{ transform: `translateX(-50%) rotate(${seconds}deg)` }}
        />
        <div className="rsvp-clock-center" />
      </div>
    </div>
  );
}

ClockFace.propTypes = {
  imageSrc: PropTypes.string,
  size: PropTypes.number
};

export default ClockFace;
