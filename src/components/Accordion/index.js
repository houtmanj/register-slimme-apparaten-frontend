import PropTypes from 'prop-types';
import React from 'react';
import {
  Accordion as AccesibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from 'react-accessible-accordion';

import CarretRightIcon from '../../images/icon-carret-right.svg';

import './style.scss';

const Accordion = ({ headingLevel, className, title, children }) => {
  const Tag = headingLevel;
  return (
    <AccesibleAccordion className={className} allowZeroExpanded>
      <AccordionItem className="c-accordion c-accordion--light ">
        <AccordionItemHeading className="c-accordion__toggle">
          <AccordionItemButton>
            <AccordionItemState>
              {({ expanded }) => <CarretRightIcon className={`c-accordion__toggle-icon ${expanded ? '' : 'c-accordion--closed'}`} />}
            </AccordionItemState>
            <Tag className="c-accordion__toggle-title">{title}</Tag>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemState>
          {({ expanded }) => (
            <AccordionItemPanel className="c-accordion__content">
              {expanded}
              {children}
            </AccordionItemPanel>
          )}
        </AccordionItemState>
      </AccordionItem>
    </AccesibleAccordion>
  );
};

Accordion.defaultProps = {
  headingLevel: 'h3',
};

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  headingLevel: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Accordion;
