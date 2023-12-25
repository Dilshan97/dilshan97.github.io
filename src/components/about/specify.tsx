/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'

const Specify: FC = () => {
    return (
        <div className="specification bg-slate-100 py-20">
            <div className="container max-w-screen-lg mx-auto">
                <div className="heading">
                    <p className="text-3xl py-4 text-gray-600">Summery</p>
                    <h2 className="text-6xl">
                        Your perfect Full-stack partner.
                    </h2>
                </div>

                <div className="grid lg:grid-cols-1 grid-cols-1 gap-4 my-10">
                    <div className="bg-white rounded-3xl p-8">
                        <h2 className="text-3xl font-medium">Software Engineer at the intersection of design and code.</h2>
                        <br />
                        <p className="leading-7">
                            Hey! I'm Dilshan Ramesh from Colombo, Sri Lanka 🇱🇰.
                            I am a dedicated Software Engineer with 3+ years of experience in crafting robust web and mobile applications. <br /><br />
                            My commitment to excellence and professionalism drives me to create impactful solutions that improve the world through software.<br /><br />
                            Proficient in Software Design, UI/UX Engineering, Full-stack Web Development, and Mobile App Development, I excel in both individual and collaborative team environments.
                        </p>
                    </div>

                    <div className="grid lg:grid-rows-1 grid-rows-2 lg:grid-cols-4 grid-cols-2 gap-4">
                        <div className="item text-center bg-white rounded-3xl p-10">
                            <div className="flex flex-col">
                                <h3 className="linear-gradient-1 text-7xl">10<span className="text-2xl align-top">+</span></h3>
                                <p className="py-2">Happy clients</p>
                            </div>
                        </div>

                        <div className="item text-center bg-white rounded-3xl p-10">
                            <div className="flex flex-col">
                                <h3 className="linear-gradient-2 text-7xl">20<span className="text-2xl align-top">+</span></h3>
                                <p className="py-2">Web & Mobile projects</p>
                            </div>
                        </div>

                        <div className="item text-center bg-white rounded-3xl p-10">
                            <div className="flex flex-col">
                                <h3 className="linear-gradient-3 text-7xl">3<span className="text-2xl align-bottom">Years</span></h3>
                                <p className="py-2">Experience</p>
                            </div>
                        </div>

                        <div className="item text-center bg-white rounded-3xl p-10">
                            <div className="flex flex-col">
                                <h3 className="linear-gradient-4 text-7xl">100<span className="text-2xl align-bottom">%</span></h3>
                                <p className="py-2">Passion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specify