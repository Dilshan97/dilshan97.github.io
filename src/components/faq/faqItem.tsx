/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

"use client";
import React, { FC, useState } from 'react';
import { Add, Minus } from 'iconsax-react';

interface FaqItem {
    question: React.ReactNode,
    answer: React.ReactNode,
}

const FaqItem: FC<FaqItem> = ({ question, answer }) => {

    const [isVisible, setVisible] = useState<boolean>(false);

    return (
        <div className="faq-item bg-white rounded-3xl p-12 flex justify-between items-center border hover:border-blue-500">
            {!isVisible ? (
                <>
                    <p>{question}</p>
                    <Add size="24" onClick={() => setVisible(true)} className="cursor-pointer"/>
                </>
            ) : (
                <>
                    <p>{answer}</p>
                    <Minus size="24" onClick={() => setVisible(false)} className="cursor-pointer"/>
                </>
            )}
        </div>
    )
}

export default FaqItem