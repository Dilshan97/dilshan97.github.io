/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
*/
import React, { FC } from 'react';

//components
import Cta from '@/components/cta';
import Specify from '@/components/about/specify';
import TechStack from '@/components/techStack';
import Experiences from '@/components/experiences/experiences';
import Educations from '@/components/education/educations';

const Page:FC = () => {
  return (
    <>
      <Specify/>
      <Experiences/>
      <Educations/>
      <TechStack/>
      <Cta/>
    </>
  );
}

export default Page