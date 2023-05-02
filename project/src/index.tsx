import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const bg = 'img/bg-the-grand-budapest-hotel.jpg';
const poster = 'img/the-grand-budapest-hotel-poster.jpg';
const name = 'The Grand Budapest Hotel poster';
const genre = 'Drama';
const year = 2014;

root.render(
  <React.StrictMode>
    <App bg={bg} poster={poster} name={name} genre={genre} year={year}/>
  </React.StrictMode>,
);
