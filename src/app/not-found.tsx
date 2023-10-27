/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */

"use client";
import Link from 'next/link'
import React, { FC } from 'react'
import Lottie from 'react-lottie-player';
import animation from '@/assets/animations/notfound.json';

const NotFound: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-sm:h-screen">
      <Lottie
        animationData={animation}
        loop
        play
        speed={1}
        className="w-1/2 max-sm:w-auto"
      />
      <div className="py-10 flex flex-col items-center">
        <p className="py-5">Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}

export default NotFound