/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import { Suspense, useEffect, useState } from "react";
import Post from "./components/Post";
import PostModel from "@/utils/models/post.model";
import { BlogListLoading } from "./components/BlogLoading";

const query = `{
    user(username: "dilshandev") {
      publication {
        posts(page: 0) {
          _id
          slug
          title
          brief
          coverImage
          replyCount
          totalReactions
          dateAdded
        }
      }
    }
}`;

const Page = () => {

    const [posts, setPosts] = useState<PostModel[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let unmounted = false;

        const getPosts = async () => {
            setLoading(true);
            fetch('https://api.hashnode.com', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authentication: 'd63afa03-efe3-4518-90ac-be217da89809'
                },
                body: JSON.stringify({ query })
            })
                .then(res => res.json())
                .then(res => {
                    if (!unmounted) {
                        setPosts(res.data.user.publication.posts);
                    }
                })
                .finally(() => setLoading(false));
        }

        getPosts();

        return () => {
            unmounted = true;
        }
    }, [])

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto max-w-screen-lg">
                <div className="mx-2 max-sm:mx-5">
                    <p className="text-4xl py-4 text-gray-600 max-sm:text-xl">
                        Blog
                    </p>
                    <h2 className="text-6xl max-sm:text-4xl max-w-4xl">
                        Where Ideas Meet Interaction
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-10">
                    <Suspense fallback={<BlogListLoading />}>
                        {isLoading && <BlogListLoading />}
                        {posts.map((post: PostModel) => <Post post={post} />)}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Page;

