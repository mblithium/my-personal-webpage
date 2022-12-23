import styles from "../Footer/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Criado por <u><a href="https://github.com/mblithium" target="_blank">Matheus Bastos</a></u>.</span>
        </footer>
    )
}

export default Footer;