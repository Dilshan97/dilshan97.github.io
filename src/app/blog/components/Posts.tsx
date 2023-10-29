/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { formatDate } from "@/utils/common";
import { PostPreview } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
interface PostsProps {
    posts: PostPreview[]
}
const Posts: FC<PostsProps> = ({ posts }) => {
    return (
        <div className="
        grid 
        grid-cols-2 
        gap-4 
        px-20
        max-sm:px-4 
        max-sm:grid-cols-1
        ">
            {posts.map((post) => {
                return (
                    <div className="bg-white-300 w-100">
                        <Image
                            src={post.cover.image}
                            width={500}
                            height={500}
                            alt={post.title}
                            className="object-fill"
                        />
                        <div className="my-4">
                            <h3 className="text-2xl	font-semibold">
                                <a href={`/blog/${post.slug.current}`}>
                                    {post.title}
                                </a>
                            </h3>
                            <div className="flex flex-row justify-between py-3">
                                <p className="text-sm">Published {formatDate(post.date.published)}</p>
                                <p className="text-sm">By Dilshan Ramesh</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Posts;
