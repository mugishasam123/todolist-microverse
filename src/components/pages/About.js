import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import SinglePage from './SinglePage';

const About = () => (
  <div className="about__content">
    <ul className="about__list">
      <li>
        <Link to="/about-app">About App</Link>
      </li>
      <li>
        <Link to="/about-app">About Author</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/:slug" element={<SinglePage />} />
    </Routes>
  </div>
);
export default About;
