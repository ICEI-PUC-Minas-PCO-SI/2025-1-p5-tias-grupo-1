import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Home';
import Doacao from './Doacao';
import Sobre from './Sobre';
import CourseList from './components/CourseList'; // Se quiser usar em alguma rota

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impacto-social" element={<Doacao />} />
            <Route path="/segmentos" element={<CourseList />} />
            <Route path="/sobre-nos" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
