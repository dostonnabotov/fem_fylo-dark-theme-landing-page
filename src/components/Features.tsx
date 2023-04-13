import styles from "../styles/Features.module.css";

export type Feature = {
  id: number;
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
      <div className="container region">
        <ul
          role="list"
          className={`${styles.features} grid`}
          data-layout="50-50"
        >
          {data.map(({ id, title, description, img }) => (
            <li key={id} className={`${styles.feature} grid-flow`}>
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
