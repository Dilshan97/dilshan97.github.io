/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react'

const Specify: FC = () => {
    return (
        <div className="specification bg-slate-100 padding-140">
            <div className="container mx-auto">
                <div className="mx-20">
                    <p className="text-4xl py-4 text-gray-600">Benefits</p>
                    <h2 className="text-7xl">
                        Your perfect <br />
                        Ghost partner.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 my-10">
                    <div className="bg-white rounded-3xl p-10">
                        <h2 className="text-3xl font-medium">Ghost Theme developer at the intersection of design and code.</h2>
                        <br />
                        <p className="leading-7">Hi! I am Thimira Madhusanka Thenuwara from Colombo, Sri Lanka. I turn your
                            designs into
                            pixel-perfect Ghost sites with great attention to detail and elegant animations. Say goodbye to
                            the stressful back and forth with developers who have no feel for design. Additionally, I offer
                            consulting services during your design phase with my experience in UI/UX and animation.</p>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="text-center bg-white rounded-3xl p-10">
                            <h2 className="text-7xl">10<span className="text-2xl align-top">+</span></h2>
                            <p>Happy clients</p>
                        </div>
                        <div className="text-center bg-white rounded-3xl p-10">
                            <h3 className="text-7xl">17<span className="text-2xl align-top">+</span></h3>
                            <p>Ghost projects</p>
                        </div>
                        <div className="text-center bg-white rounded-3xl p-10">
                            <h3 className="text-7xl">3<span className="text-2xl align-bottom">Years</span></h3>
                            <p>Experience</p>
                        </div>
                        <div className="text-center bg-white rounded-3xl p-10">
                            <h3 className="text-7xl">100<span className="text-2xl align-bottom">%</span></h3>
                            <p>Passion</p>
                        </div>
                    </div>
                </div>

                <div className="education">

                </div>
            </div>
        </div>
    )
}

export default Specify