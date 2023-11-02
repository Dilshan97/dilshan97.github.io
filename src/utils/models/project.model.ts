import { StaticImageData } from "next/image";

/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
interface ProjectModel {
    title: string;
    intro: string;
    image: StaticImageData;
}

export default ProjectModel;