import Head from 'next/head'
import { SocialProfileJsonLd } from 'next-seo';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Dilshan Ramesh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="My page title" key="title" />
                <SocialProfileJsonLd
                    type="Person"
                    name="Dilshan Ramesh"
                    url="https://dilshan97.github.io"
                    sameAs={[
                        'https://www.facebook.com/dilshan.ramesh.75',
                        'https://www.instagram.com/dilshan_ramesh',
                        'https://twitter.com/dilshanramesh81',
                        'https://www.youtube.com/c/DilshanRamesh',
                        'https://medium.com/@dilshanramesh81',
                        'https://github.com/Dilshan97',
                        'https://www.linkedin.com/in/dilshan-ramesh'
                    ]}
                />
            </Head>
            <main>{children}</main>
        </>
    )
}