import LoginClient from "./LoginClient";

import styles from "./Login.module.scss";

const page = () => {
  return (
    <main className={styles.container}>
      <LoginClient />
    </main>
  );
};

export default page;
