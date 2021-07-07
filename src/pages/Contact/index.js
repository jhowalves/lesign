import React from 'react';
import './styles.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Contact() {
  return(
    <div className="contact">
      <Header />

      <div className="title-contact">
        <h1>Entre em contato</h1>
      </div>
      <div className="line"></div>
      
      <div className="contact-container">
        <form >
          <input 
            type="text" 
            name="nome" 
            className="cont bradius" 
            placeholder="Nome"
          />

          <input 
            type="text" 
            name="email" 
            className="cont bradius" 
            placeholder="E-mail" 
          />

          <input 
            type="text" 
            name="assunto" 
            className="cont bradius" 
            placeholder="Assunto"
          />

          <textarea 
            name="mensagem" 
            className="men bradius" 
            placeholder="Mensagem" 
            rows="8" 
            cols="50"
          />

          <button 
            type="submit" 
            className="sb bradius"
          >
            Enviar
          </button>
        </form>
      
        <div className="map">
          <iframe title="Map Lesign" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7707345214453!2d-37.06527758460871!3d-8.424162293941828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a81b936b5a5a8d%3A0xf38e1fd85e475ec0!2sR.+Orlando+Bpo.+de+Queir%C3%B3z%2C+406+-+S%C3%A3o+Miguel%2C+Arcoverde+-+PE!5e0!3m2!1spt-BR!2sbr!4v1504474485005" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}