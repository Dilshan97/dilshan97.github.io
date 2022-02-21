import Head from 'next/head'
import { SocialProfileJsonLd } from 'next-seo';
import useDarkMode from "./darkmode";

export default function Layout({ children }) {

    const [colorTheme, setTheme] = useDarkMode();

    return (
        <>
            <Head>
                <title>Dilshan Ramesh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Dilshan Ramesh" key="title" />
                <meta name="title" content="Dilshan Ramesh | Official website" />
                <meta name="description" content="I'm a Software Engineer | Full Stack Developer | Innovator | Entrepreneur | Undergraduate | Student. This is the place where I opensource stuff and break things" />

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

            {colorTheme === "dark" ? (
                <div className="menu">
                    <div className="menu_icon" onClick={() => setTheme("dark")}>
                        <img src={"/dark.png"} alt="Dark Theme" />
                    </div>
                </div>
            ) : (
                <div className="menu">
                    <div className="menu_icon" onClick={() => setTheme("light")}>
                        <img src={"/light.png"} alt="Light Theme"/>
                    </div>
                </div>
            )}

            <main>{children}</main>
        </>
    )
}