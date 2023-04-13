import { ReactNode } from "react";
import styles from "../styles/Button.module.css";

interface IButtonProps {
  children: ReactNode;
}

const Button = ({
  children,
  ...props
}: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
