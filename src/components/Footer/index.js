import React from 'react';
import './styles.scss';

import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

export function Footer() {
  return(
    <div className="footer">
      <div className="container-footer">
        <div className="grid-footer">
        <div className="social">
            <a 
              href="https://www.facebook.com/profile.php?id=100006032207809&ref=br_rs"
              target="_blank" without rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>

            <a 
              href="https://www.instagram.com/lesign_oficialpe/"
              target="_blank" without rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      
        <div className="copyright">
            <p>Copyright © Lesign 2020 - Todos os Direitos Reservados</p>
            <p className="author">by 
              <span>
                <a href="https://jhowalves.com.br" target="_blank" without rel="noreferrer">
                  JhowAlves
                </a>
              </span>
            </p>
        </div>
      </div>
    </div>
  );
}