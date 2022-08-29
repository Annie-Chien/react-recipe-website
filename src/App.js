import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import SingleRecipe from './pages/SingleRecipe';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
