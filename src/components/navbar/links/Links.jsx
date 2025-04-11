'use client'

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>

            <div className={styles.links__container} >
                <NavLink prefix="desktop-link" 
                item={{ path: "/", title: "Homepage" }} />
                <NavLink item={{ path: "https://www.finance.yahoo.com", title: "Yahoo Finance" }} />
                <NavLink item={{ path: "https://www.datatailr.com", title: "Datatailr" }} />
            </div>


            <button data-testid="open-sidebar-btn"
                className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>

            {
                open &&
                <div data-testid="mobile-sidebar" className={styles.mobileLinks}>
                    <NavLink prefix="mobile-link" item={{ path: "/", title: "Homepage" }} />
                    <NavLink prefix="mobile-link" item={{ path: "https://www.finance.yahoo.com", title: "Yahoo Finance" }} />
                    <NavLink prefix="mobile-link" item={{ path: "https://www.datatailr.com", title: "Datatailr" }} />

                </div>
            }
        </div>
    );
}

export default Links;