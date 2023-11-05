/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import React, { FC } from 'react'
import Image, { ImageLoaderProps } from "next/image";

interface BlogImageProps {
    title: string;
    coverImage: string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const BlogImage: FC<BlogImageProps> = ({ title, coverImage }) => {
    return (
        <Image
            src={coverImage}
            width={500}
            height={500}
            alt={title}
            className="object-fill rounded-2xl"
            placeholder="blur"
            blurDataURL={coverImage}
            loading="lazy"
            loader={imageLoader}
        />
    )
}

export default BlogImage
