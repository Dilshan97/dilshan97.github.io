/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+/, '') // Remove leading hyphens
        .replace(/-+$/, ''); // Remove trailing hyphens
}
export {
    createSlug
}