/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { FC } from "react";
import Image from "next/image";
import PostModel from "@/utils/post.model";
import { formatDate } from "@/utils/common";
interface PostsProps {
    posts: PostModel[]
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
                    <div key={post._id} className="bg-white-300 w-100" >
                        <Image
                            src={post.coverImage}
                            width={500}
                            height={500}
                            alt={post.title}
                            className="object-fill"
                        />
                        <div className="my-4">
                            <h3 className="text-2xl	font-semibold">
                                <a href={`https://dilshan97.hashnode.dev/${post.slug}`} target="_blank">
                                    {post.title}
                                </a>
                            </h3>
                            <div className="flex flex-row justify-between py-3">
                                <p className="text-sm">Published {formatDate(post.dateAdded)}</p>
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
