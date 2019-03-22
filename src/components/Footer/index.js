import React from 'react';

import './style.scss';

function Footer() {
  return (
    <div className="container-fluid footer-wrapper no-print">
      <div className="row bg-darkgrey footer">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8">
          <footer className="footer-component">
            <h3 className="c-footer__heading">Disclaimer</h3>
            <ul>
              <li>Het register biedt geen compleet overzicht van alle slimme apparaten. Registratie van slimme apparaten in het register is niet verplicht, maar wordt wel gevraagd.</li>
              <li>De &#39;slimme apparaten&#39; in het register zijn van diverse organisaties.</li>
              <li>De gegevens van de eigenaar van het slimme apparaat worden niet getoond i.v.m. privacy.</li>
              <li>De eigenaar bepaalt of hij reageert; hij is dat niet verplicht.</li>
              <li>Uw mail wordt niet gearchiveerd in het register. Ook uw persoonlijke gegevens worden niet geregistreerd in het register.</li>
              <li>De gegevens van de apparaten in het register worden overgenomen van de eigenaar. Die is verantwoordelijk voor de juistheid en volledigheid van de gegevens.</li>
              <li>OIS, onderdeel van Gemeente Amsterdam, kan niet aansprakelijk worden gesteld voor de juistheid, volledigheid en actualiteit van de website. De Gemeente Amsterdam, OIS kan in het bijzonder niet aansprakelijk worden gesteld voor eventuele schade of consequenties ontstaan door direct of indirect gebruik van de inhoud van de website.</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
