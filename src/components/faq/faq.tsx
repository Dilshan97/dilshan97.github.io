/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import FaqItem from '@/components/faq/faqItem';
import React, { FC } from 'react';

const Faq: FC = () => {
    return (
        <div className="faqs bg-slate-100">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-6xl text-center">
                    A few things 🙄 <br />
                    clients normally ask me:
                </h2>

                <div className="grid grid-rows-3 grid-flow-col gap-4 py-10">
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                    <FaqItem question={'What services do you offer exactly?'} answer={'this is answer'}/>
                </div>
            </div>
        </div>
    )
}

export default Faq