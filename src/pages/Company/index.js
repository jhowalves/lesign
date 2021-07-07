import React from 'react';
import './styles.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import mission from '../../assets/mission.png';
import eye from '../../assets/eye.png';
import values from '../../assets/values.png';
import printer from '../../assets/printer.png';
import startup from '../../assets/startup.png';
import innovation from '../../assets/innovation.png';

export function Company() {
  return(
    <div className="company">
      <Header />
      
      <div className="title-contact">
        <h1>Quem somos</h1>
      </div>
      <div className="line"></div>

      <div className="company-container">
        <div className="about">
          <p>
            A Lesign é fruto da dedicação de uma profissional comprometida e que 
            ama o que faz. Vem atendendo, trabalhando e satisfazendo às necessidades 
            de seus clientes com criatividade, iniciativa e qualidade. A combinação 
            da atenção dada a cada cliente, com qualidade, variedade e pontualidade, 
            faz da Lesign uma empresa completa e inovadora
          </p>

          <div className="about-items">
            <div className="item">
              <img src={mission} alt="Missão" />
              <h2>Missão</h2>
              <p>
                Atender satisfatoriamente às necessidades de nossos clientes no 
                seguimento de Comunicação Visual, prestando bom atendimento, com 
                confiança, variedade, qualidade e prazo
              </p>
            </div>

            <div className="item">
              <img src={eye} alt="Visão" />
              <h2>Visão</h2>
              <p>
                Impressionar e ser reconhecida no mercado que atuamos, buscando 
                aprimoramento constante para influenciar o sucesso de nossos clientes
              </p>
            </div>

            <div className="item">
              <img src={values} alt="Valores" />
              <h2>Valores</h2>
              <p>
                Respeito no relacionamento humano. Trabalhar com dedicação, 
                excelência e qualidade pois imagem é tudo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="solutions-items">
        <div className="item">
          <img src={printer} alt="Impressão digital" />
          <h2>Impressão <br />digital</h2>
          <p>
            Desenvolvemos projetos especificamente para sua necessidade
          </p>
        </div>

        <div className="item">
          <img src={startup} alt="Investimento" />
          <h2>Padronização <br /> institucional</h2>
          <p>
            Combinamos estética com valorização da marca, assim maximinizando 
            o retorno de seu investimento
          </p>
        </div>

        <div className="item">
          <img src={innovation} alt="Inovação" />
          <h2>Inove, apareça <br />e impressione</h2>
          <p>
            Além de gerar tráfego para sua empresa, usamos nossas experiências 
            e técnicas para converter mais visitantes em vendas
          </p>
        </div>
      </div>
      

      <Footer />
    </div>
  );
}