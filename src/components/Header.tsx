import Logo from "./Logo";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.header} container`}>
        <Logo />
        <nav>
          <ul role="list" className="flex-group" data-spacing="large">
            <li>
              <a href="#" className={styles.navLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Team
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
