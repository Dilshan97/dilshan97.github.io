/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
const Skeleton = ({ className }: { className: string }) => {
    return (
        <div className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`} />
    );
}

export default Skeleton;