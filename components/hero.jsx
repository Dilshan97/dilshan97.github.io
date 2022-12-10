import styles from '../styles/hero.module.css'

export default function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <img
                            className={styles.hero_img}
                            src={`https://github.com/dilshan97.png`}
                            alt="Dilshan Ramesh"
                            width={190}
                            height={180}
                        />
                        <h3 className={styles.how_im_i}>
                            Hey, I'm Dilshan 🤟
                        </h3>

                        <h1 className={styles.main_title}>
                            <span className={styles.hero_highlight}>Building</span> digital interactive web apps and mobile apps.
                        </h1>

                        <p className={styles.sub_title}>
                            A <strong>Software Engineer</strong> and <strong>Innovator</strong> in 🇱🇰. I specialize in Fullstack Web Development, Mobile Application Development, and SEO.
                        </p>

                        <div>
                            <ul className={styles.social}>
                                <li><a href="https://github.com/Dilshan97" target="_blank">Github</a></li>
                                <li><a href="https://www.facebook.com/dilshan.ramesh.75/" target="_blank">Facebook</a></li>
                                <li><a href="https://www.instagram.com/dilshan_ramesh/" target="_blank">Instagram</a></li>
                                <li><a href="https://twitter.com/dilshanramesh81" target="_blank">Twitter</a></li>
                            </ul>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}