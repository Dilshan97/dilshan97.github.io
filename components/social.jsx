import styles from "../styles/social.module.css"

export default function Social() {
    return (
        <>
            <section className={styles.social}>
                <h3 className={styles.title}>
                    <span className={styles.highlight}>Social Presence</span>
                </h3>


                <section className={styles.social_media}>
                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>

                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>

                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>

                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>

                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>

                    <div className={styles.social_item}>
                        <a href="" className={styles.media_link}>Facebook</a>
                    </div>
                </section>
            </section>
        </>
    )
}