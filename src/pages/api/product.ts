// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
      id: 1,
      category: "Electronics",
      name: "Smartphone",
      price: 699.99,
      description:
        "A high-end smartphone with a sleek design and powerful features.",
    },
    {
      id: 2,
      category: "Electronics",
      name: "Laptop",
      price: 1299.99,
      description: "A powerful laptop for work and entertainment.",
    },
    {
      id: 3,
      category: "Electronics",
      name: "Tablet",
      price: 499.99,
      description: "A versatile tablet for productivity and entertainment.",
    },
  ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
