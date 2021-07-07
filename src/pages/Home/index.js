import React from 'react';
import './styles.scss';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';

import image01 from '../../assets/image01.png';
import image02 from '../../assets/image02.png';
import checked from '../../assets/checked.png';


export function Home() {
  return(
    <div className="home">
      <Header />
      <Banner />

      <div className="slogan"> 
        <div className="slogan-container">
          <div className="slogan-description">
            <h1>Projeto e produção de fachada e sinalização interna de forma personalizada 
              para a sua empresa</h1>
            <p>Tudo em um único lugar para comodidade e satisfação de nossos clientes</p>
          </div>

          <div className="slogan-image">
            <img src={image01} alt="" />
          </div>
        </div>
      </div>

      <div className="services">
        <div className="title-services">
          <h1>Nossos serviços</h1>
        </div>
        <div className="line"></div>

        <div className="services-grid">
          <img className="creativeImg" src={image02} alt="creative" />
          <div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Banner e Faixas</p>
          </div>
          <div className="services-items">
          <img src={checked} alt="check" />
            <p>Adesivos Decorativos</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Placas de Sinalização</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Fachadas e Luminosos</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Sinalização Interna</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Sinalização de Veiculos</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Letras Caixa</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Convites Finos</p>
          </div>
          <div className="services-items">
            <img src={checked} alt="check" />
            <p>Quadros</p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}