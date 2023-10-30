/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import config from "./config";
import { createClient } from "next-sanity";

export const sanityClient = createClient(config);