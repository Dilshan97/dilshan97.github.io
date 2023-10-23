/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

"use client";
import React, { FC, useRef, useState } from 'react';
import { Add, Minus } from 'iconsax-react';
import { motion } from 'framer-motion';
interface FaqItem {
    question: React.ReactNode,
    answer: React.ReactNode,
}

const FaqItem: FC<FaqItem> = ({ question, answer }) => {

    const ref = useRef<number>(0);
    const [isVisible, setVisible] = useState<boolean>(false);

    const initial = {

    };

    const click = () => {
        setVisible(!isVisible);
        ref.current++;
    }

    return (
        <motion.div
            key={ref.current}
            animate={ref.current === 0 ? {} : {
                transform: "rotateX(180deg)",
                transformStyle: "preserve-3d",
            }}
            transition={{ scale: { type: 'spring', stiffness: 500, duration: 0.8 }, duration: 0.4 }}
            style={{ userSelect: 'none' }}
            className="faq-item bg-white rounded-3xl p-12 flex justify-between items-center border hover:border-blue-500"
        >
            {!isVisible ? (
                <>
                    <motion.p
                        animate={ref.current === 0 ? { 
                            transform: "rotateX(0deg)" 
                        } : { 
                            transform: "rotateX(180deg)" 
                        }}
                    >
                        {question}
                    </motion.p>
                    <Add size="24" onClick={() => click()} className="cursor-pointer" />
                </>
            ) : (
                <>
                    <motion.p
                        animate={ref.current === 0 ? { 
                            transform: "rotateX(0deg)" 
                        } : { 
                            transform: "rotateX(180deg)" 
                        }}
                    >
                        {answer}
                    </motion.p>
                    <Minus size="24" onClick={() => click()} className="cursor-pointer" />
                </>
            )}
        </motion.div>
    )
}

export default FaqItem