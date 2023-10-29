/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { groq } from "next-sanity";
import { cache } from "react";
import { sanityClient } from "@/utils/sanity/client";
import { Post, PostPreview, Sections } from "../../utils/types";
import Posts from "./components/Posts";

const query = groq`*[_type == "post"] | order(date.published desc) {
    _id,
    slug,
    title,
    description,
    date,
    body
}`;

const getSections = cache(async () => {
    const posts: PostPreview[] = await sanityClient.fetch(query);

    const sections = posts.reduce((acc: Sections, curr: Post) => {
        const year: number = new Date(curr.date.published).getFullYear();

        return {
            ...acc,
            [year]: acc[year] ? [...acc[year], curr] : [curr],
        };
    }, {});

    await new Promise(r => setTimeout(r, parseInt('0')));

    return sections;
});

async function Data() {
    const sections = await getSections();

    return (
        <>
            {Object
                .entries(sections)
                .sort((a: any, b: any) => b[0] - a[0])
                .map(([year, posts]) => <Posts
                    posts={posts}
                />)}
        </>
    )
}

const Page = () => {
    return (
        <div className="bg-white p-40">
            <Data />
        </div>
    );
}

export default Page;

