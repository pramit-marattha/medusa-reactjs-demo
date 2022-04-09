import React, { useEffect, useState } from "react";

import { Product } from "../interfaces";
import * as MedusaApiReq from "../MedusaApiReq";

import "./ProductLists.css";

function ProductLists(): JSX.Element {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const productLists = await MedusaApiReq.getProducts();
    setProductList(productLists.data.products);
    console.log("whattt", productLists.data.products);
  }

  return (
    <>
      <section className="products">
        {productList.map((prodList: Product, key: number) => (
          <>
            <div className="product-card" key={key}>
              <div className="product-image">
                <img src={prodList.thumbnail} alt={prodList.title} />
              </div>
              <div className="product-details">
                <h4>{prodList.title}</h4>
                <p>{prodList.description}</p>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}

export default ProductLists;
