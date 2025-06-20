import React from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Home from './Home';
import Doacao from './Doacao';
import Sobre from './Sobre';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sobre /> {/*Página inicial */}
      </main>
      <Footer />
    </div>
  );
}

export default App;