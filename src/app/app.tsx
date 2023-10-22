/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC, useContext } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import MobileMenu from '@/components/mobileMenu';
import { AppContext } from '@/context/appContext';

interface AppProps {
    children: React.ReactNode;
}
const App: FC<AppProps> = ({ children }) => {
    const { isMenuOpen } = useContext(AppContext);
    return (
        <>
            {isMenuOpen ? (
                <MobileMenu />
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    )
}

export default App