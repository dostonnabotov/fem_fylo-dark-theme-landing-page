import { RightArrowIcon } from "../assets/icons/icons";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section>
      <div
        className={`${styles.about} container region grid`}
        data-layout="50-50"
      >
        <div>
          <img
            src="src/assets/images/illustration-stay-productive.png"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="grid-flow">
          <h2 className="section-title">Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a className="custom-link" href="#">
            <span>See how Fylo works</span>
            <RightArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
