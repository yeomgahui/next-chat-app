"use client";

import Input from "@/components/Input";
import styles from "./Login.module.scss";

const LoginClient = () => {
  return (
    <form className={styles.form} onSubmit={() => {}}>
      <Input
        id="email"
        type="text"
        name="email"
        label="이메일"
        placeholder="이메일을 입력하세요"
      />
      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        placeholder="비밀번호를 입력하세요"
      />
    </form>
  );
};

export default LoginClient;
