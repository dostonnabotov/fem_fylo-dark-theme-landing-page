import Logo from "./Logo";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className="primary-header-wrapper">
      <div className="container">
        <div className={styles.header}>
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
      </div>
    </header>
  );
};

export default Header;
