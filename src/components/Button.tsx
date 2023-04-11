import { FC, ReactElement, ReactNode } from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  children?: ReactNode;
  props?: any;
  role: "button" | "link";
  link?: "string";
}

const Button: FC<ButtonProps> = ({
  children,
  role,
  link,
  ...props
}: ButtonProps) => {
  return role === "link" ? (
    <a href={link} className={styles.button} {...props}>
      {children}
    </a>
  ) : (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
