import React from 'react';
import '../main.scss';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="text-center">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
