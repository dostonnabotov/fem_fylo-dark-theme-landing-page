import Logo from "./Logo";
import styles from "../styles/Header.module.css";
const navLinks = [
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Team",
    url: "#",
  },
  {
    name: "Sign In",
    url: "#",
  },
];

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`${styles.header} container region`}>
        <Logo />
        <nav>
          <ul role="list" className="flex-group" data-spacing="large">
            {navLinks.map(({ name, url }) => (
              <li>
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
