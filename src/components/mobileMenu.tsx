/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { motion } from 'framer-motion';
import React, { FC, useContext } from 'react';
import { CloseCircle, ArrowRight2 } from 'iconsax-react';
import { AppContext } from '@/context/appContext';

const MobileMenu: FC = () => {

    const { setMenuOpen } = useContext(AppContext);

    const variants = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.3,
                delay: 1.2
            }
        }
    };

    return (
        <motion.div
            className="w-screen h-screen relative"
            variants={variants}
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
            <CloseCircle
                size="32"
                className="flex-end cursor-pointer absolute right-5 top-5"
                onClick={() => setMenuOpen(false)}
            />
            <div className='flex flex-col items-center h-screen justify-center'>
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
                    href="https://dilshan97.hashnode.dev"
                    target="_blank"
                    rel="noopener"
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
                    Project Request <ArrowRight2 className="mx-1" size={16} />
                </motion.a>
            </div>
        </motion.div>
    )
}

export default MobileMenu