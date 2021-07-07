import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logotipo from '../../assets/logotipo.svg';

export function Header() {
  return(
    <div className="container">
      <header>
        <Link to="/">
          <img src={logotipo} alt="Logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/company">Empresa</Link>
            </li>
            <li>
              <Link to="">Serviços</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}