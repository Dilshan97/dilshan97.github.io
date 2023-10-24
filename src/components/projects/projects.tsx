/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'
import ProjectCard from './projectCard'

const Projects: FC = () => {
    return (
        <div className="projects bg-blue-50">
            <div className="container mx-auto">
                <div className="mx-20 max-sm:mx-10">
                    <p className="text-4xl py-4 text-gray-600 max-sm:text-xl">Projects</p>
                    <h2 className="text-7xl max-sm:text-4xl">
                        A small selection <br /> of my projects.
                    </h2>
                </div>


                <div className="grid grid-cols-2 grid-flow-row gap-4 py-10 px-20 max-sm:grid-cols-1 max-sm:px-3">
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
                </div>
            </div>
        </div>
    )
}

export default Projects