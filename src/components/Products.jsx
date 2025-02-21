import React from "react";
import Product from "./Product";

const Products = () => {
  let products = [
    {
      title: "aquitel",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: false,
    },
    {
      title: "Yir2022",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: true,
    },
    {
      title: "yahoo!",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="py-10">
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
};

export default Products;
