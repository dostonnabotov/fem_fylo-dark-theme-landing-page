import styles from "../styles/Features.module.css";

type Feature = {
  title: string;
  description: string;
  img: string;
};

interface IFeaturesProps {
  data: Feature[];
}

const Features = ({ data }: IFeaturesProps) => {
  return (
    <section>
      <div className="container">
        <ul role="list" className={styles.features}>
          {data.map(({ title, description, img }) => (
            <li className={`${styles.feature} grid-flow`}>
              <img src={img} alt="" aria-hidden="true" />
              <h3 className={styles.featureTitle}>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
