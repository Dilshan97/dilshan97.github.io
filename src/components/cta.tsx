/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react';
import { ArrowRight2 } from 'iconsax-react';

const Cta: FC = () => {
    return (
        <div className="intro bg-slate-100">
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-7xl gradient-heading w-9/12">
                    What exciting projects or ideas do you have in mind?
                </h2>
                <a href="#" className="text-xl flex items-center justify-center text-blue-600">
                    Start a project request
                    <ArrowRight2 className="mx-1" size={16} />
                </a>
            </div>
        </div>
    )
}

export default Cta