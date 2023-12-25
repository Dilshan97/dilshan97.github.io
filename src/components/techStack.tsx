/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image from 'next/image';
import React, { FC } from 'react';

const TechStack: FC = () => {
    return (
        <div className="tech-stack bg-white-100 py-28">
            <div className="container max-w-screen-lg mx-auto">
                <div className="title">
                    <p className="text-3xl py-4 text-gray-600">Tech Stack</p>
                    <h2 className="text-6xl">
                        A mix of the tech stack
                    </h2>
                </div>

                <div className="grid grid-cols-8 grid-flow-row gap-4 py-10">
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=laravel" alt="Laravel" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=react" alt="React" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=flutter" alt="Flutter" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=dart" alt="Dart" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=git" alt="Git" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=androidstudio" alt="Android Studio" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=redux" alt="Redux" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=aws" alt="AWS" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=angular" alt="Angular" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=arduino" alt="Arduino" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=css" alt="CSS" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=figma" alt="Figma" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=gatsby" alt="Gatsby" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=githubactions" alt="Github Actions" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=mysql" alt="MySql" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=nextjs" alt="Next Js" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=php" alt="PHP" />
                    <Image className="w-9/12" width={500} height={500} src="https://skillicons.dev/icons?i=postman" alt="Postman" />
                </div>
            </div>
        </div>
    )
}

export default TechStack