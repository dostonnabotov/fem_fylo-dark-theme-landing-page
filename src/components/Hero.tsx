// import Button from "./Button";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div
        className={`${styles.hero} container region grid-flow`}
        data-spacing="large"
      >
        <img
          src="../assets/images/illustration-intro.png"
          alt="Intro Illustration"
        />
        <h1 className={`${styles.heroTitle} section-title`}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="section-lead">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a className="button" href="#">
          Get started
        </a>
      </div>
    </section>
  );
};

export default Hero;
