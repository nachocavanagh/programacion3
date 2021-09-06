import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards';

function App() {
  return (
    <React.Fragment>
      <Header />
        <main className="container">
          <section className="card-container">
            

               <Cards/>
               <Cards/>
               <Cards/>
               <Cards/>
               <Cards/>
               <Cards/>
               <Cards/>

            
                   
          </section>

          <div className="button-container">
          <button className="more" type="button">Cargar más tarjetas</button>
          </div>

        </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
