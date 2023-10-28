/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { FC, useContext } from 'react';
import { AppContext } from '@/context/BaseContext';
import { ArrowRight2, HambergerMenu } from 'iconsax-react';
import Logo from "@/assets/images/logo.png";

const Header: FC = () => {

  const { setMenuOpen } = useContext(AppContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleTheme = () => {
    switch (theme) {
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme("dark");
        break;
      default:
        setTheme('light');
        break;
    }
  };

  return (
    <div className="nav h-full py-4 sticky top-0 border-b-2 border-gary-900 z-10">
      <div className="container max-w-4xl flex items-center justify-between mx-auto sm:px-10">
        <div className="brand">
          <a href="/" title="Dilshan Ramesh">
            <Image
              src={Logo}
              alt="dilshan97"
              className="w-1/5 max-sm:w-4/12"
              width={500}
              height={500}
            />
          </a>
        </div>

        <nav>
          <ul className="flex">

            <li className="px-8">
              <a href="/about">About</a>
            </li>

            <li className="px-8">
              <a href="/projects">Projects</a>
            </li>

            <li className="px-8">
              <a href="/faq">FAQ</a>
            </li>

            <li className="px-8">
              <a href="https://dilshan97.hashnode.dev" target="_blank" rel="noopener">Blog</a>
            </li>

          </ul>
        </nav>

        <div className="project-request max-sm:hidden max-md:hidden">
          <a href="#" className="flex items-center text-blue-600">
            Let’s design your app <ArrowRight2 className="mx-1" size={16} />
          </a>
        </div>

        {/* <button onClick={handleTheme}>click</button> */}

        <div className="mobile-menu flex items-center max-sm:block max-lg:hidden max-md:block max-xl:hidden max-2xl:hidden 2xl:hidden">
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