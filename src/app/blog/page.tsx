/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client"
import { Suspense, useEffect, useState } from "react";
import Posts from "./components/Posts";
import PostModel from "@/utils/post.model";

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

    useEffect(() => {
        let unmounted = false;
        
        const getPosts = async () => {
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
                });
        }

        getPosts();

        return () => {
            unmounted = true;
        }
    }, [])

    return (
        <div className="bg-white py-10 ">
            <div className="container mx-auto max-w-4xl">
                <div className="mx-2 max-sm:mx-10">
                    <p className="text-4xl py-4 text-gray-600 max-sm:text-xl">
                        Blog
                    </p>
                    <h2 className="text-6xl max-sm:text-4xl max-w-4xl">
                        Where Ideas Meet Interaction
                    </h2>
                </div>

                <Suspense fallback={<p>Loading</p>}>
                    <div
                        className="
                            grid 
                            grid-cols-2 
                            gap-4
                            max-sm:px-4 
                            max-sm:grid-cols-1
                            py-10">
                        <Posts posts={posts} />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}

export default Page;

