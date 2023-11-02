/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className="footer bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="divider"></div>
        <div className="credit flex justify-between py-5">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dilshan Ramesh. All Rights Reserved.</p>
          <ul className="flex">
            <li className="px-5">
              <a href="#" className="text-sm">8 Reasons for Flutter</a>
            </li>
            <li>
              <a href="/privacy" className="text-sm">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer