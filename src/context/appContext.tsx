/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import React, { FC, createContext, useState } from 'react';

export const AppContext = createContext({
    isMenuOpen: false,
    setMenuOpen: (isOpen: boolean) => { }
});

interface AppContextProviderProps {
    children: React.ReactNode
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const values = {
        isMenuOpen,
        setMenuOpen
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
