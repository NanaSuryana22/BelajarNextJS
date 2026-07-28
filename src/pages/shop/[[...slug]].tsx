import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  return (
    <>
      <h1>Detail Shop Page</h1>
      <span>
        Shop : {query.slug ? query.slug[0] : ""} -{" "}
        {query.slug ? query.slug[1] : ""}{" "}
      </span>
    </>
  );
};

export default ShopPage;
