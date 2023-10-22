/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import React, { FC, useContext } from 'react';
import { CloseCircle, ArrowRight2 } from 'iconsax-react';
import { AppContext } from '@/context/appContext';

const MobileMenu: FC = () => {

    const { setMenuOpen } = useContext(AppContext);

    return (
        <div className="w-screen h-screen static">
            <CloseCircle
                size="32"
                className="flex-end cursor-pointer absolute right-8 top-8"
                onClick={() => setMenuOpen(false)}
            />
            <div className='flex flex-col items-center h-screen justify-center bg-white'>
                <a className="text-4xl px-8 py-4" href="/projects">Projects</a>
                <a className="text-4xl px-8 py-4" href="/about">About</a>
                <a className="text-4xl px-8 py-4" href="/faq">FAQ</a>
                <a className="text-4xl px-8 py-4" href="https://dilshan97.hashnode.dev" target="_blank" rel="noopener">Blog</a>
                <a className="text-2xl flex items-center py-8 text-blue-600" href="">
                    Project Request <ArrowRight2 className="mx-1" size={16} />
                </a>
            </div>
        </div>
    )
}

export default MobileMenu