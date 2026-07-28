import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <h1>Register Page</h1>
      <p>
        Sudah punya akun ?, <Link href="/auth/login">login di sini</Link>
      </p>
    </>
  );
};

export default RegisterPage;
