/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image from 'next/image';
import React, { FC } from 'react';
import { ArrowRight2, Verify } from 'iconsax-react';

import linkedin from '@/assets/images/icons/linkedin.svg';
import facebook from '@/assets/images/icons/facebook.svg';
import instagram from '@/assets/images/icons/instagram.svg';
import dilshan97 from '@/assets/images/dilshan97.jpeg';

import { motion } from 'framer-motion';

const Home: FC = () => {

  return (
    <div className="hero my-12 max-sm:h-screen sm:mb-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <motion.div
          className="flex justify-center w-full"
        >
          <div className="radial-blur"></div>
          <Image
            src={dilshan97}
            alt="dilshan97"
            className="w-1/5 rounded-full"
            width={500}
            height={500}
          />
        </motion.div>

        <div className="text-center flex flex-col justify-center items-center">
          <h3 className="text-3xl py-8 flex items-center justify-center">
            Hey, I'm Dilshan
            <Verify size="22" variant="Bold" className="text-blue-600 ml-2" />
          </h3>

          <h1 className="text-7xl font-extrabold">
            <span className="highlight">Building</span> digital <br /> interactive web apps and <br /> mobile apps.
          </h1>

          <p className="text-2xl py-8 leading-10 max-w-2xl ">A <strong>Software Engineer</strong> & <strong>Innovator</strong> in 🇱🇰.<br />
            I specialize in Fullstack Web Development, Mobile  Application Development.
          </p>

          <a href="mailto:dilshanramesh81@gmail.com" className="flex items-center justify-center text-blue-600">
            Let’s design your app
            <ArrowRight2 className="mx-1" size={16} />
          </a>

          <div className="social-connect flex flex-row justify-center py-4">
            <a
              className="px-2 max-sm:w-16 max-sm:px-1"
              href="https://www.linkedin.com/in/dilshan-ramesh"
              title="Linkedin"
              target="_blank"
              rel="noopener">
              <Image
                src={linkedin}
                width={500}
                height={500}
                className="w-8 rounded-full"
                alt='Linkedin'
              />
            </a>

            <a
              className="px-2 max-sm:w-16 max-sm:px-1"
              href="https://www.instagram.com/dilshan_ramesh/"
              title="Instagram"
              target="_blank"
              rel="noopener">
              <Image
                src={instagram}
                width={500}
                height={500}
                className="w-8 rounded-full"
                alt='Instagram'
              />
            </a>

            <a
              className="px-2 max-sm:w-16 max-sm:px-1"
              href="https://www.facebook.com/dilshan.ramesh.75/"
              title="Facebook"
              target="_blank"
              rel="noopener">
              <Image
                src={facebook}
                width={500}
                height={500}
                className="w-8 rounded-full"
                alt='Facebook'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home