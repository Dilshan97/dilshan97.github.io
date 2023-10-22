/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import React, { FC } from 'react'
import Company from './company';
import novaLogo from 'public/images/nova-logo.jpeg';
import iLabLogo from 'public/images/ilabs-logo.jpeg';

const Experiences: FC = () => {
    return (
        <div className="education bg-red-50">
            <div className="container mx-auto">
                <div className="title mx-20">
                    <p className="text-4xl py-4 text-gray-600">Experiences</p>
                    <h2 className="text-7xl">
                        Life's interactive lessons & adventures.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 py-10 mx-20">
                    <Company
                        title={'Senior Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Sep 2021 - Present'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · flutter · React.js · Flutter · Next.js · PHP · Laravel · Angular'}
                        logo={novaLogo}
                    />

                    <Company
                        title={'Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Sep 2021 - Present'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · flutter · React.js · Flutter · Next.js · PHP · Laravel · Angular'}
                        logo={novaLogo}
                    />

                    <Company
                        title={'Software Engineer'}
                        company={'iLabs'}
                        type={'Full-time'}
                        duration={'Mar 2021 - Sep 2021'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · flutter · React.js · Flutter · Next.js · PHP · Laravel · Angular'}
                        logo={iLabLogo}
                    />

                    <Company
                        title={'Trainer Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Aug 2019 - Feb 2020'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · flutter · React.js · Flutter · Next.js · PHP · Laravel · Angular'}
                        logo={novaLogo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Experiences