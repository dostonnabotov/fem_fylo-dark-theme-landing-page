import LogoImg from "../assets/images/logo.svg";
import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={LogoImg} alt="Fylo Brand" className={styles.logoIcon} />
    </a>
  );
};

export default Logo;
