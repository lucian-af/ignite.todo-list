import imgLogo from "../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={imgLogo} />
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
