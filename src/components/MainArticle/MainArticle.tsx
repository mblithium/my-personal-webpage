import styles from "./MainArticle.module.css";

function MainArticle(props:any) {
    return (
        <article className={styles.mainArticle}>
            {props.children}
        </article>
    )
}

export default MainArticle;