import styles from "../styles/Testimonials.module.css";

type Testimonial = {
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
      <div className="container">
        <ul role="list" className={styles.testimonials}>
          {data.map(({ author, message }) => (
            <li className={`${styles.testimonial} grid-flow`}>
              <blockquote>{message}</blockquote>
              <div className="flex-group" data-spacing="small">
                <img
                  src={author.avatar}
                  alt={`${author.name} avatar`}
                  className={styles.testimonialAuthorAvatar}
                />
                <div>
                  <p className={styles.testimonialAuthorName}>{author.name}</p>
                  <p>
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
