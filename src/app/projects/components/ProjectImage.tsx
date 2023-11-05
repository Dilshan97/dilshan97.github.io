/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client";
import Image from 'next/image';
import React, { FC } from 'react';
import { constants } from '@/utils/constants';
import { ImageLoaderProps, StaticImageData } from 'next/image';

interface ProjectImageProps {
    image: StaticImageData;
    title: string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${constants.APP_URL}/${src}?w=${width}&q=${quality || 75}`
}

const ProjectImage: FC<ProjectImageProps> = ({ image, title }) => {
    return (
        <Image
            width={500}
            height={500}
            src={image}
            alt={title}
            placeholder="blur"
            loading="lazy"
            loader={imageLoader}
        />
    )
}

export default ProjectImage