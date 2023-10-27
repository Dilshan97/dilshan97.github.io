/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC, useContext } from 'react';

//components
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import MobileMenu from '@/components/common/mobileMenu';
import { ThemeProvider } from 'next-themes';
import { AppContext } from '@/context/BaseContext';

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