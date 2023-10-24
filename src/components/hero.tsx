/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import Image from 'next/image';
import React, { FC } from 'react';
import { ArrowRight2, Verify } from 'iconsax-react';

const Hero: FC = () => {
    return (
        <div className="hero my-12 md:h-screen">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <>
                    <div className="radial-blur"></div>
                    <Image
                        src="https://github.com/dilshan97.png"
                        alt="dilshan97"
                        className="w-1/5 rounded-full"
                        width={500}
                        height={500}
                    />
                </>

                <div className="text-center">
                    <h3 className="text-3xl py-8 flex items-center justify-center">
                        Hey, I'm Dilshan
                        <Verify size="22" variant="Bold" className="text-blue-600 ml-2" />
                    </h3>

                    <h1 className="text-7xl font-extrabold">
                        <span className="highlight">Building</span> digital <br /> interactive web apps and <br /> mobile apps.
                    </h1>

                    <p className="text-2xl py-8 leading-10">A <strong>Software Engineer</strong> & <strong>Innovator</strong> in 🇱🇰.
                        <br /> I specialize in Fullstack Web Development, Mobile <br /> Application Development, and SEO.
                    </p>

                    <a href="#" className="flex items-center justify-center text-blue-600">
                        Start a project request
                        <ArrowRight2 className="mx-1" size={16} />
                    </a>

                    <div className="social-connect">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero