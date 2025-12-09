import React from "react";

import styles from "./footer.module.css";

function Footer(){
    <>
    
    <p className={styles.footer}>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
    </>
}
export default Footer;