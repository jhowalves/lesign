import React from 'react';
import './styles.scss';
import facebook from '../../assets/facebook.png'

export function Footer() {
  return(
    <div className="footer">
      <div className="container-footer">
        <div className="grid-footer">
          <div className="address">
            <h3>Endereço</h3>
            <p>Rua Orlando Bispo de Queiroz nº 406</p>
            <p>São Miguel - Arcoverde - PE</p>
            <p>Tel: (87)3821-2778 / (87)99640-5468</p>
          </div>

          <div className="social">
            <a 
              href="https://www.facebook.com/profile.php?id=100006032207809&ref=br_rs"
              target="_blank" without rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      
        <div className="copyright">
            <p>Copyright © Lesign 2020 - Todos os Direitos Reservados</p>
            <p>by 
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