/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { ProjectImageLoading } from '@/app/projects/components/ProjectsListLoading';
import ProjectModel from '@/utils/models/project.model';
interface ProjectCardProps {
  project: ProjectModel;
  direction: string;
}
const ProjectCard: FC<ProjectCardProps> = ({ project, direction }) => {

  const [isLoaded, setLoaded] = useState<boolean>(false);

  const onLoad = () => setLoaded(true);

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
      className="bg-white flex flex-col md:flex-row md:gap-[32px] lg:gap-0 lg:items-center lg:justify-between shadow-card-smooth py-[40px] px-[40px] rounded-[4px]">

      {direction == "left" && (
        <div className="flex pt-[24px] md:pt-0 md:pr-5">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
      )}

      <div className="flex flex-col gap-[16px] md:w-[400px] lg:w-[unset] md:gap-[32px]">
        <div className="flex flex-col gap-[8px] md:gap-[16px]">
          <h5 className="md:text-2xl text-3xl font-bold">{project.title}</h5>
          <p className="text-base text-N-600 lg:w-[500px] leading-normal">{project.intro}</p>
        </div>
        <div className="flex gap-[16px] flex-col md:flex-row">
          <a
            href={project.url ?? '#'}
            rel="noreferrer"
            target="_blank"
            className="button items-center flex justify-center gap-[8px] cursor-pointer bg-B-50 rounded-[8px] hover:bg-B-200 border border-B-600 px-[20px] py-[8px] text-base font-500 w-full md:w-[160px]">
            <i className="ri-github-fill"></i> Live Demo
          </a>
        </div>
      </div>

      {direction == "right" && (
        <div className="flex pt-[24px] md:pt-0">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard