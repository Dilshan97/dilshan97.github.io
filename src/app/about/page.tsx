/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
*/
import { Metadata } from 'next';
import React, { FC } from 'react';

//components
import Cta from '@/components/cta';
import Specify from '@/components/about/specify';
import TechStack from '@/components/techStack';
import Educations from '@/components/education/educations';
import Experiences from '@/components/experiences/experiences';
import { constants } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Dilshan Ramesh | About',
  alternates: {
    canonical: `${constants.APP_URL}/about`
  },
}

const Page: FC = () => {
  return (
    <>
      <Specify />
      <Experiences />
      <Educations />
      <TechStack />
      <Cta />
    </>
  );
}

export default Page