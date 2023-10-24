/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface Company {
    title: string;
    company: string;
    type: string;
    duration: string;
    skills: string;
    logo: StaticImageData;
}
const Company: FC<Company> = ({ title, company, type, duration, skills, logo }) => {
    return (
        <div className="company flex justify-start items-center bg-white shadow-none rounded-3xl p-5">
            <Image
                className="rounded-3xl"
                src={logo}
                width={100}
                height={100}
                alt={company}
            />
            <div className="info mx-3">
                <h3 className="font-semibold text-lg">{title}</h3>
                <h3 className="text-gray-600 py-1">{company} - {type}</h3>
                <p className="text-sm text-gray-600">{duration}</p>
                <p className="text-sm py-2">Skills: {skills}</p>
            </div>
        </div>
    )
}

export default Company