"use client"

import Link from "next/link";
import styles from "./navLink.module.css"

const NavLink = ({ item }) => {

    return (
        <Link href={item.path}>
            <span className={styles.container}>{item.title}</span>
        </Link>
    );
}

export default NavLink;

