import styles from "../styles/Footer.module.css";
import { EmailIcon, LocationIcon, PhoneIcon } from "../assets/icons/icons";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className="container region grid-flow" data-spacing="large">
        <Logo />
        <div className={styles.footer}>
          <div className={styles.footerDescription}>
            <LocationIcon />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ul role="list" className={`${styles.footerContact} grid-flow`}>
            <li className="flex-group">
              <PhoneIcon />
              <a href="tel:15431234567">+1-543-123-4567</a>
            </li>
            <li className="flex-group">
              <EmailIcon />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </li>
          </ul>
          <nav className={styles.footerNav}>
            <ul role="list" className="grid-flow">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul role="list" className="grid-flow">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </nav>
          <ul role="list" className={`${styles.footerSocialLinks} flex-group`}>
            {socialLinks.map(({ name, url, icon }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{name}</span>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
