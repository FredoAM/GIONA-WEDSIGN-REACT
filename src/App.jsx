import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import OurStory from './components/Our-Story.jsx';
import Travel from './components/Travel.jsx';
import Registry from './components/Registry.jsx';
import Faqs from './components/Faqs.jsx';
import Rsvp from './components/Rsvp.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/OurStory' element={<OurStory isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/Travel' element={<Travel isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/Registry' element={<Registry isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/Faqs' element={<Faqs isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path='/Rsvp' element={<Rsvp isOpen={isOpen} setIsOpen={setIsOpen} />} />
      </Routes>
    </Router>
  );
};


export default App
