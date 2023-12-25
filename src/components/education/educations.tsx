/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react';
import Institute from './institute';

import sliitLogo from '@/assets/images/sliit-logo.png';
import mrchLogo from '@/assets/images/mrch-logo.jpeg';

const Educations: FC = () => {
    return (
        <div className="educations bg-orange-50 py-24">
            <div className="container max-w-screen-lg mx-auto">
                <div className="title">
                    <p className="text-3xl py-4 text-gray-600">Education</p>
                    <h2 className="text-6xl">
                        The Path of Learning I've Taken
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-10">
                    <Institute
                        title={'BSc (Hons) in Information Technology'}
                        institute={'Sri Lanka Institute of Information Technology (SLIIT) - Malabe, Sri Lanka'}
                        duration={'2017 - 2022'}
                        logo={sliitLogo}
                    />
                    <Institute
                        title={'G.C.E Advanced Level (Engineering Technology)'}
                        institute={'Mahinda Rajapaksha College - Homagama, Sri Lanka'}
                        duration={'2014 - 2016'}
                        logo={mrchLogo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Educations
