import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Data = {
  status: boolean;
  statusCode: number;
  data: {
    id: number;
    category: string;
    name: string;
    price: number;
    description: string;
  }[];
};

const ProductPage = () => {
  // const { isLogin, setIsLogin } = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
