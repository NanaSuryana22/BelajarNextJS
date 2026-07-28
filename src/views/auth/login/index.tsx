import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginView = () => {
  const { push } = useRouter();

  const handlerProductButton = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={handlerProductButton}>Ke Halaman Product</button>
      <p>
        Belum punya akun ?, register <Link href="/auth/register">di sini</Link>
      </p>
    </div>
  );
};

export default LoginView;
