/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import { createSlug } from '@/utils/common';
import { motion } from 'framer-motion';
interface ProjectCardProps {
  title: string;
  intro: string;
  image: StaticImageData;
}
const ProjectCard: FC<ProjectCardProps> = ({ title, intro, image }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        },
      }}
      className="m-2"
    >
      {/* <a href={`/projects/${createSlug(title)}`} className="m-2"> */}
      <div className="bg-white-200">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full h-full"
        />
      </div>

      <div className="bottom-5 left-5 max-sm:bottom-0 pb-14">
        <h3 className="pt-5 text-xl font-bold">{title}</h3>
        <p className="py-3 text-black-500 text-base">
          {intro}
        </p>
      </div>
      {/* </a> */}
    </motion.div>
  )
}

export default ProjectCard