import styles from "./Header.module.css";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

function Header() {
    return (
        <>
            <div id="header" className={`${styles.headerBanner}`}></div>
            <HeaderNavbar></HeaderNavbar>
        </>
    )
}

export default Header;