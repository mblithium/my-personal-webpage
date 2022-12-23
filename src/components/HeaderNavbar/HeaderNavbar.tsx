import styles from "./HeaderNavbar.module.css";
import { Link } from "react-router-dom";

function HeaderNavbar(props:any) {
    return(
        <nav id="header-navbar" className={`${styles.headerNavbar}`}>

            <div className={`${styles.headerNavbarItem}`}>
                <Link to="/">Home</Link>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <Link to="/experiments">Experiments</Link>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <a href="#">DevTools</a>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <Link to="/articles/posts">Articles</Link>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <Link to="/Network">Network</Link>
            </div>
            <div className={`${styles.headerNavbarItem}`}>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default HeaderNavbar;