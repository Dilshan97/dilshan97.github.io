/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

import { FC, useState } from "react";
import Image from "next/image";
import PostModel from "@/utils/models/post.model";
import { formatDate } from "@/utils/common";
import { BlogImageLoading } from "./BlogLoading";
interface PostsProps {
    post: PostModel
}
const Post: FC<PostsProps> = ({ post }) => {

    const [isLoaded, setLoaded] = useState<boolean>(false);

    const onLoad = () => setLoaded(true);

    return (
        <>
            <div key={post._id} className="bg-white-300 w-100" >
                <Image
                    src={post.coverImage}
                    width={500}
                    height={500}
                    alt={post.title}
                    className="object-fill rounded-2xl"
                    onLoad={onLoad}
                />
                {!isLoaded && <BlogImageLoading />}
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
