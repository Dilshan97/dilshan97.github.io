/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */

interface PostModel {
    _id: string;
    slug: string;
    title: string;
    brief: string;
    coverImage: string;
    replyCount: number;
    totalReactions: number;
    dateAdded: string;
}

export default PostModel;
