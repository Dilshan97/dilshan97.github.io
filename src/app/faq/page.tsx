/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import FaqItem from '@/components/faq/faqItem';
import React, { FC } from 'react';

const Page: FC = () => {
    return (
        <div className="faqs bg-slate-100 md:h-screen">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-6xl text-center">
                    A few things 🙄 <br />
                    clients normally ask me:
                </h2>

                <div className="grid grid-rows-3 grid-cols-2 grid-flow-col gap-4 py-10">
                    <FaqItem
                        question={'What specific services do you provide?'}
                        answer={'I specialize in web/mobile app development & offer consulting for design & development.'}
                    />

                    <FaqItem
                        question={'What is the typical duration of a project?'}
                        answer={"It's based on the requirement. Normally, it takes 2 weeks to 4 weeks."}
                    />

                    <FaqItem
                        question={'How much is the Minimum budget for a Project?'}
                        answer={"It's based on the requirement. Normally, Minimum LKR 15K to LKR ∞"}
                    />

                    <FaqItem
                        question={'What is your location & timezone?'}
                        answer={"I am located in Sri Lanka, in the Sri Lanka Standard Time (SLST) timezone."}
                    />

                    <FaqItem
                        question={"What is your work dicipline?"}
                        answer={'I maintain a strong work discipline, ensuring timely & high-quality deliverables.'}
                    />

                    <FaqItem
                        question={'How often can we communicate?'}
                        answer={'We can communicate as often as needed to ensure smooth progress and address any concerns'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page