/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react'

const Footer:FC = () => {
  return (
    <div className="footer bg-white">
        <div className="container max-w-4xl mx-auto">
            <div className="divider"></div>
            <div className="credit flex justify-between py-5">
                <p className="text-sm">&copy; 2023 Dilshan Ramesh. All rights reserved.</p>
                <ul className="flex">
                    <li className="px-5"><a href="#" className="text-sm">8 Reasons for Flutter</a></li>
                    <li><a href="#" className="text-sm">Privacy</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer