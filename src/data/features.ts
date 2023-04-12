import AccessAnyWhereImg from "../assets/images/icon-access-anywhere.svg";
import SecurityImg from "../assets/images/icon-security.svg";
import ColloborationImg from "../assets/images/icon-collaboration.svg";
import AnyFileImg from "../assets/images/icon-any-file.svg";
import { Feature } from "../components/Features";

const featuresData = (): Feature[] => {
  return [
    {
      id: 1,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      img: AccessAnyWhereImg,
    },
    {
      id: 2,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      img: SecurityImg,
    },
    {
      id: 3,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      img: ColloborationImg,
    },
    {
      id: 4,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      img: AnyFileImg,
    },
  ];
};

export default featuresData;
