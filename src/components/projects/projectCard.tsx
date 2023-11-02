/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import ProjectsListLoading from '@/app/projects/components/ProjectsListLoading';
import ProjectModel from '@/utils/models/project.model';
interface ProjectCardProps {
  project: ProjectModel;
}
const ProjectCard: FC<ProjectCardProps> = ({ project }) => {

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
      className="m-2"
    >
      <div className="bg-white-200">
        <Image
          src={project.image}
          width={500}
          height={500}
          alt={project.title}
          className="w-full h-full"
          onLoad={onLoad}
        />
        {!isLoaded && <ProjectsListLoading />}
      </div>

      <div className="bottom-5 left-5 max-sm:bottom-0 pb-10">
        <h3 className="pt-3 text-xl font-bold">
          {project.title}
        </h3>
        <p className="py-3 text-black-500 text-base">
          {project.intro}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectCard