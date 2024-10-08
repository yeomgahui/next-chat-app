import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  bgColor?: string;
  fgColor?: string;
  width?: string;
}

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  ...restProps
}: ButtonProps) => {
  const composeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary
  );

  const style = {
    backgroundColor: bgColor,
    color: fgColor || "",
    width: width || "",
  };

  return (
    <button
      type={type}
      style={style}
      className={composeClasses}
      {...restProps}
    />
  );
};

export default Button;
