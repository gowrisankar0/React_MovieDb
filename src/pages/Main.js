import React from 'react';
import "./main.css"
import Shedule from './Shedule';
import Trend from './Trend';
import Blog from './Blog';

const Main = () => {
  return (
    <main>
        <Shedule />
        <Trend />
        <Blog />
    </main>
  )
}

export default Main