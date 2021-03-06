import React from 'react';

import './style.scss';
import styled from '@datapunt/asc-core';
import {
  Footer as AscFooter,
  FooterTop,
  Row,
  Column,
  FooterToggle,
  FooterContent,
  FooterLinkList,
  FooterLinkListItem,
  Link,
  FooterHeading,
} from '@datapunt/asc-ui';

const StyledFooter = styled(AscFooter)`
  .;
`;

const desclaimers = [
  { id: 1, value: `Het register biedt geen compleet overzicht van alle slimme apparaten. Registratie van slimme apparaten in het register is niet verplicht, maar wordt wel gevraagd.` },
  { id: 2, value: `De "slimme apparaten" in het register zijn van diverse organisaties.` },
  { id: 3, value: `De gegevens van de eigenaar van het slimme apparaat worden niet getoond i.v.m. privacy.` },
  { id: 4, value: `De eigenaar bepaalt of hij reageert; hij is dat niet verplicht.` },
  { id: 5, value: `Uw mail wordt niet gearchiveerd in het register. Ook uw persoonlijke gegevens worden niet geregistreerd in het register.` },
  { id: 6, value: `De gegevens van de apparaten in het register worden overgenomen van de eigenaar. Die is verantwoordelijk voor de juistheid en volledigheid van de gegevens.` },
  { id: 7, value: `OIS, onderdeel van Gemeente Amsterdam, kan niet aansprakelijk worden gesteld voor de juistheid, volledigheid en actualiteit van de website. De Gemeente Amsterdam, OIS kan in het bijzonder niet aansprakelijk worden gesteld voor eventuele schade of consequenties ontstaan door direct of indirect gebruik van de inhoud van de website.` },
];

const DisclaimerLinks: React.FC<{ indent?: boolean }> = () => (
  <FooterLinkList>
    {desclaimers.map(({ id, value}) => (
      <FooterLinkListItem key={id}>
        <Link href="/" variant="with-chevron" >
          {value}
        </Link>
      </FooterLinkListItem>
    ))}
  </FooterLinkList>
);

function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <Row>
          <Column wrap span={{ small: 1, medium: 2, big: 4, large: 8, xLarge: 8 }}>
            <React.Fragment>
              <FooterToggle title="Disclaimer" hideAt="tabletM">
                <FooterContent indent>
                  <DisclaimerLinks />
                </FooterContent>
              </FooterToggle>
              <FooterContent showAt="tabletM">
                <FooterHeading $as="h3">Disclaimer</FooterHeading>
                <DisclaimerLinks />
              </FooterContent>
            </React.Fragment>
          </Column>
        </Row>
      </FooterTop>
    </StyledFooter>
  );
}

export default Footer;
