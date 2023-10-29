
/*
*   Copyright (c) 2023 Dilshan Ramesh
*   All rights reserved.
*/

import Skeleton from "./Skeleton";

const SkeletonText = ({ className }: { className: string }) => {
    return <Skeleton className={`rounded-lg py-2.5 ${className}`} />;
}

export default SkeletonText;