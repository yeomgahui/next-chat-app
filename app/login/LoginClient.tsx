"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";

import styles from "./Login.module.scss";

const LoginClient = () => {
  return (
    <form className={styles.form} onSubmit={() => {}}>
      <h1 className={styles.heading}>로그인</h1>
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
      <Button type="submit" width="30rem">
        로그인
      </Button>
      <Button secondary type="submit" width="30rem">
        Google 계정으로 로그인
      </Button>
      {/* <Button> 로그인</Button> */}
    </form>
  );
};

export default LoginClient;
