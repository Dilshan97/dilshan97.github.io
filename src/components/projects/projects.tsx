/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'
import ProjectCard from './projectCard'
import Image from 'next/image';

import image from "public/images/projects/image.png";
import wasthi from 'public/images/projects/Scene 9.png';
import weather from 'public/images/projects/weather.png';

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


                {/* <div className="grid grid-cols-2 grid-flow-row gap-4 py-10 px-20 max-sm:grid-cols-1 max-sm:px-3">
                    <ProjectCard title={'Dominos Pizza Clone App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Keells Super Clone App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Shopping Cart App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Weather App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Facebook Clone App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Grocery Shopping App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Tour Planner App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Coffee Shop App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Tesla Car App'} langs={['Flutter', 'Dart']} />
                    <ProjectCard title={'Wasthi Production App'} langs={['Flutter', 'Dart']} />
                </div> */}


                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:px-20 py-10">
                    <div className="grid gap-4">
                        <a href='#'>
                            <Image 
                                src={image}
                                className="h-auto max-w-full rounded-3xl"
                                width={500}
                                height={500}
                                alt=""
                            />
                        </a>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                        <Image 
                                src={weather}
                                className="h-auto max-w-full rounded-3xl"
                                width={500}
                                height={500}
                                alt=""
                            />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-3xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects