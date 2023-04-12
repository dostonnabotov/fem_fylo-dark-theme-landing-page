// import Button from "./Button";
import styles from "../styles/Cta.module.css";

const Cta = () => {
  return (
    <section className={`${styles.ctaWrapper} region`}>
      <div className={`${styles.cta} grid-flow`}>
        <h2 className="section-title">Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className={styles.ctaForm}>
          <div className={`${styles.ctaInputGroup}`}>
            <label htmlFor="email" className="sr-only">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className={styles.ctaInput}
              placeholder="email@example.com"
              pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
              title="Enter valid email address"
              required
            />
            <button type="submit" className={`${styles.ctaButton} button`}>
              Get Started For Free
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cta;
