/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react'

const Cta: FC = () => {
    return (
        <div className="intro bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-7xl gradient-heading">
                    Interested in <br /> working with me?
                </h2>
                <a href="#" className="text-xl flex items-center justify-center text-blue-600">
                    Start a project request
                    <i className="isax isax-arrow-right-3 mx-1"></i>
                </a>
            </div>
        </div>
    )
}

export default Cta