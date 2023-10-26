/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC, useContext } from 'react';
import { AppContext } from '@/context/appContext';

//components
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import MobileMenu from '@/components/common/mobileMenu';

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