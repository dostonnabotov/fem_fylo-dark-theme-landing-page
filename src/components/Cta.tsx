import Button from "./Button";

const Cta = () => {
  return (
    <div className="cta grid-flow">
      <h2 className="section">Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <label htmlFor="email" className="sr-only">
          Enter your email address
        </label>
        <input
          type="email"
          className="input"
          placeholder="email@example.com"
          pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
          title="Enter valid email address"
          required
        />
        <Button role="button" children="Get started for free" />
      </form>
    </div>
  );
};

export default Cta;
