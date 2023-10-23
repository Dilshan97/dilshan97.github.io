/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import Image from 'next/image';
import React, { FC } from 'react';
import { Thorchain } from 'iconsax-react';
import wasthi from 'public/images/projects/Scene 9.png';

interface ProjectCardProps {
  title: string;
  langs: string[];
}
const ProjectCard: FC<ProjectCardProps> = ({ title, langs }) => {
  return (
    <div className="rounded-3xl relative bg-white">
      <Image
        src={wasthi}
        width={500}
        height={500}
        alt={title}
        className="w-full h-full rounded-3xl"
      />
      <div className="icon absolute top-5 left-5">
        <Thorchain size="32" />
      </div>
      <div className="absolute bottom-5 left-5 max-sm:bottom-0">
        <h3 className="text-xl font-bold w-2/4 max-sm:w-4/5">{title}</h3>
        <p className="w-2/4 py-3 text-gray-500 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex my-4">
          {langs && langs.map((lang: string) => (
            <p className="p-2 mr-1 bg-gray-200 rounded-xl text-sm">{lang}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard