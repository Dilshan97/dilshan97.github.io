import styles from '../styles/hero.module.css'

export default function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <img
                            className={styles.hero_img}
                            src={"/dilshan.jpg"}
                            alt="Dilshan Ramesh"
                            width={190}
                            height={180}
                        />
                        <h3 className={styles.how_im_i}>
                            Hey, I'm Dilshan Ramesh
                        </h3>

                        <h1 className={styles.main_title}>
                            I develop interactive <span className={styles.hero_highlight}>web & mobile apps</span>
                        </h1>

                        <p className={styles.sub_title}>
                            I'm an <strong>Open Source Contributor, Freelancer, Innovator & Tech enthusiast</strong>.
                        </p>

                        <div>
                            <ul className={styles.social}>
                                <li><a href="">Github</a></li>
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">Twitter</a></li>
                                {/* <li><a href="">Linkedin</a></li> */}
                            </ul>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}