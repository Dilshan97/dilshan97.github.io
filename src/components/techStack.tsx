/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react'

const TechStack: FC = () => {
    return (
        <div className="tech-stack bg-white-100">
            <div className="container mx-auto">
                <div className="title mx-20">
                    <p className="text-4xl py-4 text-gray-600">Tech Stack</p>
                    <h2 className="text-7xl">
                        A mix of the tech stack
                    </h2>
                </div>

                <div className="grid py-10 px-20">
                    <img className="w-full"
                        src="https://skillicons.dev/icons?i=git,aws,angular,arduino,aws,css,dart,figma,firebase,flutter,gatsby,github,githubactions,js,laravel,mysql,nextjs,php,postman,react,redux,tailwind,ts,androidstudio"
                        alt="tech stack" />
                </div>
            </div>
        </div>
    )
}

export default TechStack