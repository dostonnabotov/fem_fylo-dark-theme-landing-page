import ProfileImg1 from "../assets/images/profile-1.jpg";
import ProfileImg2 from "../assets/images/profile-2.jpg";
import ProfileImg3 from "../assets/images/profile-3.jpg";
import { Testimonial } from "../components/Testimonials";

const testimonialsData = (): Testimonial[] => {
  return [
    {
      id: 1,
      author: {
        name: "Satish Patel",
        position: "Founder & CEO",
        company: "Huddle",
        avatar: ProfileImg1,
      },
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 2,
      author: {
        name: "Bruce McKenzie",
        position: "Founder & CEO",
        company: "Huddle",
        avatar: ProfileImg2,
      },
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 3,
      author: {
        name: "Iva Boyd",
        position: "Founder & CEO",
        company: "Huddle",
        avatar: ProfileImg3,
      },
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];
};

export default testimonialsData;
