'use client'

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            
            <div className={styles.links__container} >
                <NavLink item={{ path: "/", title: "Homepage" }} />
                <NavLink item={{ path: "https://www.finance.yahoo.com", title: "Yahoo Finance" }} />
                <NavLink item={{ path: "https://www.datatailr.com", title: "Datatailr" }} />
            </div>


            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    <NavLink item={{ path: "/", title: "Homepage" }} />
                    <NavLink item={{ path: "https://www.finance.yahoo.com", title: "Yahoo Finance" }} />
                    <NavLink item={{ path: "https://www.datatailr.com", title: "Datatailr" }} />

                </div>
            }
        </div>
    );
}

export default Links;