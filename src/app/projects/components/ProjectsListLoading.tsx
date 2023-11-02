
/*
*   Copyright (c) 2023 Dilshan Ramesh
*   All rights reserved.
*/

import Skeleton from "@/components/common/Skeleton";
import SkeletonText from "@/components/common/SkeletonText";

const ProjectsListLoading = () => {
    return (
        <>
            <ProjectItemLoading/>
            <ProjectItemLoading/>
            <ProjectItemLoading/>
            <ProjectItemLoading/>
        </>
    );
}

const ProjectItemLoading = () => {
    return (
        <div>
            <Skeleton className="w-full h-[180px] !rounded-2xl" />
            <SkeletonText className="w-48 max-w-full h-[1.5rem] mb-2 mt-6" />
            <SkeletonText className="w-36 max-w-full h-[1rem]" />
        </div>
    );
}

const ProjectImageLoading = () => {
    return (
        <div>
            <Skeleton className="w-full h-[180px] !rounded-2xl" />
        </div>
    )
}

export {
    ProjectItemLoading,
    ProjectsListLoading,
    ProjectImageLoading
};