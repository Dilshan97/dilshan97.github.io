import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Dilshan Ramesh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <main>{children}</main>
        </>
    )
}