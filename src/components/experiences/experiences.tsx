/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'
import Company from './company';

import novaLogo from '@/assets/images/nova-logo.jpeg';
import iLabLogo from '@/assets/images/ilabs-logo.jpeg';
import { motion } from 'framer-motion';

const Experiences: FC = () => {
    return (
        <div className="experiences bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="title mx-20">
                    <p className="text-4xl py-4 text-gray-600">Experiences</p>
                    <h2 className="text-7xl">
                        Life's interactive adventures.
                    </h2>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-4 py-10 mx-20">
                    <Company
                        title={'Senior Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Sep 2023 - Present'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · React.js · Flutter'}
                        logo={novaLogo}
                    />

                    <Company
                        title={'Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Sep 2021 - Sep 2023'}
                        skills={'E-Commerce · Agile Methodologies · Redux.js · React.js · Flutter · Next.js · PHP · Laravel · Angular'}
                        logo={novaLogo}
                    />

                    <Company
                        title={'Software Engineer - PHP'}
                        company={'iLabs'}
                        type={'Full-time'}
                        duration={'Mar 2021 - Sep 2021'}
                        skills={'E-Commerce · Flutter · PHP · Laravel · Blade Template . Stripe Payment Gateway'}
                        logo={iLabLogo}
                    />

                    <Company
                        title={'Intern Software Engineer'}
                        company={'Nova Solutions (Pvt) Ltd'}
                        type={'Full-time'}
                        duration={'Aug 2019 - Feb 2020'}
                        skills={'Firebase · VueJs · Android · Java'}
                        logo={novaLogo}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Experiences