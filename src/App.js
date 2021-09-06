import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Api from './components/Api/Api';

function App() {
  return (
    <React.Fragment>
      <Header />
        <main className="container">
          
          <Api />

          <div className="button-container">
          <button className="more" type="button">Cargar más tarjetas</button>
          </div>

        </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
