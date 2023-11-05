/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { FC } from "react";
import BlogImage from "./BlogImage";
import PostModel from "@/utils/models/post.model";
import { formatDate } from "@/utils/common";
interface PostsProps {
    post: PostModel
}
const Post: FC<PostsProps> = ({ post }) => {
    return (
        <>
            <div key={post._id} className="bg-white-300 w-100" >
                <BlogImage
                    title={post.title}
                    coverImage={post.coverImage}
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
        </>

    );
}

export default Post;
