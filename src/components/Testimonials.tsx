import styles from "../styles/Testimonials.module.css";

export type Testimonial = {
  id: number;
  author: {
    name: string;
    avatar: string;
    position: string;
    company: string;
  };
  message: string;
};

interface ITestimonialProps {
  data: Testimonial[];
}

const Testimonials = ({ data }: ITestimonialProps) => {
  return (
    <section>
      <div className="container region">
        <ul role="list" className={`${styles.testimonials} grid`}>
          {data.map(({ id, author, message }) => (
            <li key={id} className={`${styles.testimonial} grid-flow`}>
              <blockquote className={styles.testimonialMessage}>
                {message}
              </blockquote>
              <div className="flex-group" data-spacing="small">
                <img src={author.avatar} alt="" />
                <div>
                  <p className={styles.testimonialAuthorName}>{author.name}</p>
                  <p className={styles.testimonialAuthorMeta}>
                    {author.position}, {author.company}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
