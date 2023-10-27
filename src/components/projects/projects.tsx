/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'
import ProjectCard from './projectCard'
import Image from 'next/image';

import image from "@/assets/images/projects/image.png";
import wasthi from '@/assets/images/projects/Scene 9.png';
import weather from '@/assets/images/projects/weather.png';

const Projects: FC = () => {
    return (
        <div className="projects bg-white-50">
            <div className="container mx-auto">
                <div className="mx-20 max-sm:mx-10">
                    <p className="text-4xl py-4 text-gray-600 max-sm:text-xl">Projects</p>
                    <h2 className="text-7xl max-sm:text-4xl">
                        The bit of work I do, <br /> and the business I help.
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-6 md:px-20 py-10">
                    <div className="grid gap-4">
                        <ProjectCard
                            title={'Dominos Pizza Clone App'}
                            intro={''}
                            image={image}
                        />
                        <ProjectCard
                            title={'Keells Super Clone App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Shopping Cart App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Weather App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={weather}
                        />
                        <ProjectCard
                            title={'Facebook Clone App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                    </div>
                    <div className="grid gap-4 pt-40">
                        <ProjectCard
                            title={'Grocery Shopping App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Tour Planner App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Coffee Shop App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Tesla Car App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                        <ProjectCard
                            title={'Wasthi Production App'}
                            intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
                            image={image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects