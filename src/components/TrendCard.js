import React from 'react';
import "./trend.css";

const TrendCard = ({slide}) => {
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={slide.previewImg} />
        <a href='#'>

            Add to calender <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard