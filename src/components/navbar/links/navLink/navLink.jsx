"use client"

import Link from "next/link";
import styles from "./navLink.module.css"

const NavLink = ({ item, prefix }) => {
    console.log("item.path = ", item.path)
    
    return (
        <Link data-testid={`${prefix}-${item.path}`} href={item.path}>
            <span className={styles.container}>{item.title}</span>
        </Link>
    );
}

export default NavLink;

