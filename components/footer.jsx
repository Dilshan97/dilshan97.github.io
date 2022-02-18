import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.container}>

            <h3 className={styles.main_title}>
                Let's do something amazing !
            </h3>

             <p className={styles.conatact_mail}>
                <a href="mailto:hello@dilshan.dev">hello@dilshan.dev</a>     
            </p> 

            <img src="https://vihanga.dev/static/media/Footer-a-2.3e911762.svg" className={styles.footer_img} />  
        </footer>
    )
}