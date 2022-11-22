import styles from "./Header.module.css";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

function Header(props:any) {
    return (
        <>
            <div id="header" className={`${styles.headerBanner}`}></div>
            <HeaderNavbar></HeaderNavbar>
        </>
    )
}

export default Header;