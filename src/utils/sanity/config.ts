/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    apiVersion: "2023-10-30",
    useCdn: false,
};

export default config;