/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { PostPreview } from "@/utils/types";
import { FC } from "react";

interface PostsProps {
    posts: PostPreview[]
}
const Posts: FC<PostsProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {posts.map((post) => {
                return (
                    <div className="bg-white">
                        <h3>
                            <a href={`/blog/${post.slug.current}`}>
                                {post.title}
                            </a>
                        </h3>
                        <p>{post.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Posts;
