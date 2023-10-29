
/*
*   Copyright (c) 2023 Dilshan Ramesh
*   All rights reserved.
*/
"use client";
import { NextStudio } from "next-sanity/studio";
import { studioConfig } from "@/utils/sanity/studio";

const StudioPage = () => {
    return <NextStudio config={studioConfig} />
}
 
export default StudioPage;