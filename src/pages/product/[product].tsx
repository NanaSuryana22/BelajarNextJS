import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();

  return (
    <>
      <h1>Detail Product Page</h1>
      <span>Product : {query.product} </span>
    </>
  );
};

export default DetailProductPage;
