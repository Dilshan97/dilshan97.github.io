/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react';
import Institute from './institute';
import sliitLogo from 'public/images/sliit-logo.png';
import mrchLogo from 'public/images/mrch-logo.jpeg';

const Educations: FC = () => {
    return (
        <div className="educations bg-orange-50">
            <div className="container mx-auto">
                <div className="title mx-20">
                    <p className="text-4xl py-4 text-gray-600">Education</p>
                    <h2 className="text-7xl">
                        Dynamic path to knowledge & growth.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 py-10 mx-20">
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
