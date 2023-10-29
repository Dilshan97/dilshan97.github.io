/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC, useContext } from 'react';

//components
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMenu from '@/components/common/mobileMenu';
import { AppContext } from '@/context/BaseContext';
interface AppProps {
    children: React.ReactNode;
}
const App: FC<AppProps> = ({ children }) => {
    const { isMenuOpen } = useContext(AppContext);
    return (
        <AnimatePresence>
            {/* {isMenuOpen ? (
                <MobileMenu />
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )} */}
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                {children}
            </motion.div>
            <Footer />
        </AnimatePresence>
    )
}

export default App