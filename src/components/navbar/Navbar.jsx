'use client'

import styles from "./navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.logo}>
                <Image src="/logo-stocks.png" alt="" fill />
            </div>
            <Links />
        </div>
    );
}

export default Navbar;