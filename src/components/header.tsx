/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC, useContext } from 'react';
import { ArrowRight2, HambergerMenu } from 'iconsax-react';
import { AppContext } from '@/context/appContext';

const Header: FC = () => {

  const { setMenuOpen } = useContext(AppContext);

  return (
    <div className="nav h-full py-4 sticky top-0 border-b-2 border-gary-900">
      <div className="container max-w-4xl flex items-center justify-between mx-auto sm:px-10">
        <div className="brand">
          <a href="/"> Dilshan Ramesh</a>
        </div>

        <nav>
          <ul className="flex">

            <li className="px-8">
              <a href="/projects">Projects</a>
            </li>

            <li className="px-8">
              <a href="/about">About</a>
            </li>

            <li className="px-8">
              <a href="/faq">FAQ</a>
            </li>

            <li className="px-8">
              <a href="https://dilshan97.hashnode.dev" target="_blank" rel="noopener">Blog</a>
            </li>

          </ul>
        </nav>

        <div className="project-request max-sm:hidden">
          <a href="#" className="flex items-center text-blue-600">
            Project Request <ArrowRight2 className="mx-1" size={16} />
          </a>
        </div>

        <div className="mobile-menu flex items-center max-sm:block max-lg:hidden max-md:hidden max-xl:hidden max-2xl:hidden">
          <HambergerMenu
            size="32"
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default Header