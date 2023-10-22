/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import React, { FC, useContext } from 'react';
import { CloseCircle } from 'iconsax-react';
import { AppContext } from '@/context/appContext';

const MobileMenu: FC = () => {

    const { setMenuOpen } = useContext(AppContext);

    return (
        <div className="bg-white-200 w-screen h-screen absolute">
            <CloseCircle
                size="32"
                className="flex-end cursor-pointer"
                onClick={() => setMenuOpen(false)}
            />
            <nav>
                <ul className="flex flex-col items-center align-middle">
                    <li className="px-8 py-4">
                        <a href="/projects" className="text-4xl">Projects</a>
                    </li>

                    <li className="px-8 py-4">
                        <a href="/about" className="text-4xl">About</a>
                    </li>

                    <li className="px-8 py-4">
                        <a href="/faq" className="text-4xl">FAQ</a>
                    </li>

                    <li className="px-8 py-4">
                        <a href="https://dilshan97.hashnode.dev" className="text-4xl" target="_blank" rel="noopener">Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu