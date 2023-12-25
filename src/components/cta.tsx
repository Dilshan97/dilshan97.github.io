/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react';
import { ArrowRight2 } from 'iconsax-react';

const Cta: FC = () => {
    return (
        <div className="intro bg-slate-50">
            <div className="container max-w-screen-lg mx-auto text-center flex flex-col items-center">
                <h2 className="text-7xl gradient-heading">
                    What exciting projects or ideas do you have in mind?
                </h2>
                <a href="#" className="text-xl flex items-center justify-center text-blue-600">
                    Let’s design your app
                    <ArrowRight2 className="mx-1" size={16} />
                </a>
            </div>
        </div>
    )
}

export default Cta