import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import './styles/main/slider.scss';
import './styles/globals.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
