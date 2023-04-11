import Logo from "./Logo";

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: "icon",
    url: "#",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "icon",
    url: "#",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "icon",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container grid-flow">
        <Logo />
        <div className="primary-footer">
          <div>
            <img
              aria-hidden="true"
              src="./assets/images/icon-location.svg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div>
            <ul role="list">
              <li>
                <img
                  aria-hidden="true"
                  src="./assets/images/icon-phone.svg"
                  alt=""
                />
                <a href="tel:15431234567">+1-543-123-4567</a>
              </li>
              <li>
                <img
                  aria-hidden="true"
                  src="./assets/images/icon-email.svg"
                  alt=""
                />
                <a href="mailto:example@fylo.com">example@fylo.com</a>
              </li>
            </ul>
          </div>

          <nav>
            <ul role="list">
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
            <ul role="list">
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

          <div>
            <ul role="list">
              {socialLinks.map((socialLink) => (
                <li>
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <span className="sr-only">{socialLink.name}</span>
                  <i>{socialLink.icon}</i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
