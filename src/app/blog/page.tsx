/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import axios from "axios";
import Posts from "./components/Posts";

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


async function Data() {
    const resp: Response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authentication: 'd63afa03-efe3-4518-90ac-be217da89809'
        },
        body: JSON.stringify({ query })
    });

    const hashnodeResponse = await resp.json();
    const posts = hashnodeResponse.data.user.publication.posts;
    console.log(hashnodeResponse);
    return <Posts posts={posts}/>
}

const Page = () => {
    return (
        <div className="bg-white py-10 md:px-40 lg:px-40">
            <Data />
        </div>
    );
}

export default Page;

