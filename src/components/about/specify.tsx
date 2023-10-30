/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'

const Specify: FC = () => {
    return (
        <div className="specification bg-slate-100">
            <div className="container mx-auto">
                <div className="heading mx-20">
                    <p className="text-4xl py-4 text-gray-600">Summery</p>
                    <h2 className="text-7xl">
                        Your perfect Full-stack partner.
                    </h2>
                </div>

                <div className="main-grid grid grid-cols-2 gap-4 my-10 mx-20">
                    <div className="bg-white rounded-3xl p-10">
                        <h2 className="text-3xl font-medium">Software Engineer at the intersection of design and code.</h2>
                        <br />
                        <p className="leading-7">
                            Hey! I'm Dilshan Ramesh from Colombo, Sri Lanka 🇱🇰.
                            I am a dedicated Software Engineer with 3+ years of experience in crafting robust web and mobile applications.
                            My commitment to excellence and professionalism drives me to create impactful solutions that improve the world through software.
                            Proficient in Software Design, UI/UX Engineering, Full-stack Web Development, and Mobile App Development, I excel in both individual and collaborative team environments.
                        </p>
                    </div>

                    <div className="sub-grid grid grid-rows-2 grid-cols-2 grid-flow-col gap-4">
                        <div className="item text-center bg-white rounded-3xl p-10">
                            <h3 className="linear-gradient-1 text-7xl">10<span className="text-2xl align-top">+</span></h3>
                            <p className="py-2">Happy clients</p>
                        </div>

                        <div className="item text-center bg-white rounded-3xl p-10">
                            <h3 className="linear-gradient-2 text-7xl">20<span className="text-2xl align-top">+</span></h3>
                            <p className="py-2">Web & Mobile projects</p>
                        </div>

                        <div className="item text-center bg-white rounded-3xl p-10">
                            <h3 className="linear-gradient-3 text-7xl">3<span className="text-2xl align-bottom">Years</span></h3>
                            <p className="py-2">Experience</p>
                        </div>
                        
                        <div className="item text-center bg-white rounded-3xl p-10">
                            <h3 className="linear-gradient-4 text-7xl">100<span className="text-2xl align-bottom">%</span></h3>
                            <p className="py-2">Passion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specify