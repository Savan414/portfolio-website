import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A resourceful Software Developer with interest in Backend Development in Java
      </SectionText>
      <Button onclick={() => window.location = 'https://github.com/Savan414'}>Lear More</Button>
    </LeftSection>
  </Section>
);

export default Hero;