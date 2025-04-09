'use client'

import styles from "./navbar.module.css";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.logo}>
                Stocks
            </div>
            <Links />
        </div>
    );
}

export default Navbar;