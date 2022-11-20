import styles from "./HeaderNavbar.module.css";

function HeaderNavbar(props:any) {
    return(
        <nav id="header-navbar" className={`${styles.headerNavbar}`}>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">Home</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">Experiments</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">DevTools</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">Articles</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">Network</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">About</a>
            </div>
        </nav>
    )
}

export default HeaderNavbar;