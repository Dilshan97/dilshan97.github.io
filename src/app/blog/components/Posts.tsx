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
        <>
            {posts.map((post) => {
                return (
                    <div key={post._id} className="bg-white-300 w-100" >
                        <Image
                            src={post.coverImage}
                            width={500}
                            height={500}
                            alt={post.title}
                            className="object-fill rounded-2xl"
                        />
                        <div className="my-4">
                            <h3 className="text-2xl	font-semibold">
                                <a href={`https://dilshan97.hashnode.dev/${post.slug}`} target="_blank">
                                    {post.title}
                                </a>
                            </h3>
                            <div className="flex flex-row justify-between py-1">
                                <p className="text-sm">Published {formatDate(post.dateAdded)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Posts;
