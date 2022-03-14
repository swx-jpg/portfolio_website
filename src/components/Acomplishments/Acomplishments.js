import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'Countries ready'},
  { number: 200, text: 'Users', },
  { number: 1000, text: 'Search dones', },
  { number: "$1900", text: 'Dollars saved', }
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Let us help you save <div className="dollarCollored">$</div></SectionTitle>
    <SectionDivider/>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
  </Section>
);

export default Acomplishments;
