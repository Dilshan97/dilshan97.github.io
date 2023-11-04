/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { FC, useContext } from 'react';
import { AppContext } from '@/context/BaseContext';
import { ArrowRight2, HambergerMenu, CloseCircle } from 'iconsax-react';
import Logo from "@/assets/images/logo.png";
import { motion } from 'framer-motion';

const Header: FC = () => {

  const { setMenuOpen, isMenuOpen } = useContext(AppContext);
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
      <div className="container max-w-5xl flex items-center justify-between mx-auto sm:px-10">
        <div className="brand sm:w-1/5">
          <a href="/" title="Dilshan Ramesh" className="font-normal">
            Dilshan Ramesh
          </a>
        </div>

        <nav className="max-lg:hidden">
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
              <a href="/blog">Blog</a>
            </li>

          </ul>
        </nav>

        <div className="project-request hidden lg:block max-md:hidden">
          <a href="mailto:dilshanramesh81@gmail.com" className="flex items-center text-blue-600">
            Let’s design your app <ArrowRight2 className="mx-1" size={16} />
          </a>
        </div>

        <div className="sm:hidden max-md:block">
          {isMenuOpen ? (
            <CloseCircle
              size="32"
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HambergerMenu
              size="32"
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      <motion.div
        animate={isMenuOpen ? "closed" : "open"}
      >
        <div className="max-sm:block max-lg:hidden max-md:block max-xl:hidden max-2xl:hidden 2xl:hidden">
          <motion.div
            className={`w-screen h-screen top-0 ${isMenuOpen ? 'block' : 'hidden'}`}
            variants={{
              exit: {
                opacity: 0,
                height: 0,
                transition: {
                  ease: 'easeInOut',
                  duration: 0.3,
                  delay: 1.2
                }
              }
            }}
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: '100vh',
              opacity: 1
            }}
            transition={{
              duration: .5
            }}
            exit="exit"
          >
            <div className="flex flex-col items-center h-screen justify-center">
              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .6 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: .5
                  }
                }}
                className="text-4xl px-8 py-4"
                href="/projects"
              >
                Projects
              </motion.a>

              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .5 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: .4
                  }
                }}
                className="text-4xl px-8 py-4"
                href="/about"
              >
                About
              </motion.a>

              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: .3
                  }
                }}
                className="text-4xl px-8 py-4"
                href="/faq"
              >
                FAQ
              </motion.a>

              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .3 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: .2
                  }
                }}
                className="text-4xl px-8 py-4"
                href="/blog"
              >
                Blog
              </motion.a>

              <motion.a
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: .1
                  }
                }}
                className="text-2xl flex items-center py-8 text-blue-600"
                href=""
              >
                Let’s design your app <ArrowRight2 className="mx-1" size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header