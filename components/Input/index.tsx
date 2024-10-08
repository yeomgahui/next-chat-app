import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  id: string;
  className?: string;
}

const index = ({ id, label, placeholder, type, ...restProps }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default index;
