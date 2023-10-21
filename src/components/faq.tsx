/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import React, { FC } from 'react';
import { Add } from 'iconsax-react';

const Faq: FC = () => {
    return (
        <div className="faqs bg-slate-100 default-padding" id="faqs">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-6xl text-center">
                    A few things 🙄 <br />
                    clients normally ask me:
                </h2>

                <div className="grid grid-rows-3 grid-flow-col gap-4 py-10">
                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>

                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>

                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>

                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>

                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>

                    <div className="faq-item bg-white rounded-3xl p-12 flex justify-between hover:border border-blue-500">
                        <p>What services do you offer exactly?</p>
                        <Add size="24"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq