/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image';

interface InstituteProps {
    title: string;
    institute: string;
    duration: string;
    logo: StaticImageData;
}
const Institute: FC<InstituteProps> = ({ title, institute, duration, logo }) => {
    return (
        <div className="institute flex justify-start items-center bg-white shadow-none rounded-3xl p-5">
            <Image
                className="rounded-3xl"
                src={logo}
                width={100}
                height={100}
                alt={institute}
            />
            <div className="info px-2">
                <h3 className="font-semibold text-lg">{title}</h3>
                <h3 className="text-gray-600 py-1">{institute}</h3>
                <p className="text-sm text-gray-600">{duration}</p>
            </div>
        </div>
    )
}

export default Institute
