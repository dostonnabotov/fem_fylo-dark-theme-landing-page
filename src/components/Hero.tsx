import styles from "../styles/Hero.module.css";
import IllustrationIntro from "../assets/images/illustration-intro.png";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div
        className={`${styles.hero} container region grid-flow`}
        data-spacing="large"
      >
        <img src={IllustrationIntro} alt="Intro Illustration" />
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
