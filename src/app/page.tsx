/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react';
import Hero from '@/components/hero';
import HeroText from '@/components/heroText';
import Cta from '@/components/cta';
import Faq from '@/components/faq';
import TechStack from '@/components/techStack';
import Projects from '@/components/projects';
import Specify from '@/components/specify';

const Home: FC = () => {
  return (
    <>
      <Hero/>
      <HeroText/>
      <Specify/>
      <Projects/>
      <TechStack/>
      <Faq/>
      <Cta/>
    </>
  )
}

export default Home