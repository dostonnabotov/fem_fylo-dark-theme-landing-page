import Logo from "./Logo";
import styles from "../styles/Header.module.css";
const navLinks = [
  {
    name: "Features",
    url: "#features",
  },
  {
    name: "Team",
    url: "#about",
  },
  {
    name: "Sign In",
    url: "#cta",
  },
];

const Header = () => {
  return (
    <header className={`${styles.headerWrapper} region`}>
      <a
        id="skip-nav"
        href="#main-content"
        className="sr-only sr-only-focusable"
      >
        Skip to main content
      </a>
      <div className={`${styles.header} container`}>
        <Logo />
        <nav>
          <ul role="list" className="flex-group" data-spacing="large">
            {navLinks.map(({ name, url }) => (
              <li key={name}>
                <a href={url} className={styles.navLink}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
