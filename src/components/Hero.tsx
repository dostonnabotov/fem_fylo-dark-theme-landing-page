import Button from "./Button";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={`${styles.hero} container grid-flow`}>
        <img
          src="src/assets/images/illustration-intro.png"
          alt="Intro Illustration"
        />
        <h1 className="section-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button role="button" children="Get started" />
      </div>
    </section>
  );
};

export default Hero;
