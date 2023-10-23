/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react'

const Projects: FC = () => {
    return (
        <div className="projects bg-blue-100">
            <div className="container mx-auto">
                <div className="mx-20">
                    <p className="text-4xl py-4 text-gray-600">Projects</p>
                    <h2 className="text-7xl">
                        A small selection <br /> of my projects.
                    </h2>
                </div>

                <div className="grid grid-cols-3 grid-flow-row gap-4 py-10">
                    <div className="bg-white rounded-3xl p-12">1</div>
                    <div className="bg-white rounded-3xl p-12">2</div>
                    <div className="bg-white rounded-3xl p-12">3</div>
                    <div className="bg-white rounded-3xl p-12">4</div>
                    <div className="bg-white rounded-3xl p-12">5</div>
                    <div className="bg-white rounded-3xl p-12">6</div>
                </div>
            </div>
        </div>
    )
}

export default Projects