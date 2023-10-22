/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import Cta from '@/components/cta';
import Specify from '@/components/specify';
import TechStack from '@/components/techStack';
import React, { FC } from 'react';

const Page:FC = () => {
  return (
    <>
      {/* <Specify/> */}
      <TechStack/>
      <Cta/>
    </>
  );
}

export default Page