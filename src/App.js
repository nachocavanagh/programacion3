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

        </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
