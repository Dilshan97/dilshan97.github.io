/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            My Post: {params.slug}
        </div>
    )
}

export default Page;