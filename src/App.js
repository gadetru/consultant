
import React, { useState } from 'react';
import './App.scss'

import interiorDesing from './img/photo1.png'
import avatar from './img/photo2.png'
import flecha from './img/icons8-right-arrow-24 (1).png'



function App() {


  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='contenedor-principal'>
      <header className='header-container' > 
        <div>
          <h2>This interior</h2>
        </div>
        
        <nav>
          <ul className={`links ${isOpen ? 'active' : ''}`}> 
          <li><a href="https://www.linkedin.com/in/gadetru/">Home</a></li>
          <li><a href="https://www.linkedin.com/in/gadetru/">Collection</a></li>
          <li><a href="https://www.linkedin.com/in/gadetru/">About</a></li>
          <li><a href="https://www.linkedin.com/in/gadetru/">Contact</a></li>
          </ul>

        </nav>

        <div onClick={toggleMenu}  class={`icon nav-icon-5 ${isOpen ? 'open ' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`initial ${isOpen ? 'active ' : ''}`}></div>

        

      </header>

      <main className='main-container'>
        <div className='description-container'>
          <h2>Modern interior</h2>
          <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
          <a> Read more  <img src={flecha} alt='arrow'></img> </a>
          
        </div>
        <div className='fondo-img'>
          <img src={interiorDesing}  alt='interior decoration'>


            
          </img>

              {/* estoy tratando de posicionar el div absoluto dentro del de la imagen para que se mueva de forma relativa
              */}
          <div className='designer-box'>

            
              <div className='avatar-box'> 
                <img src={avatar} alt='avatar'></img>
                <div>
                  <h3> Aliza Webber</h3>
                  <p> interior designer</p>
                </div>
              </div>
            <h4 className='honores'>
            Designed in 2020 by Aliza Webber
            </h4>

        
          </div>
        </div>
      </main>
      <footer className='pie-pagina'>
        <p>Creado por mí mismo, un servidor</p>
      </footer>
    </div>
   
  );
}

export default App;
