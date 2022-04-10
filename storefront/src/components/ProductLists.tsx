import React, { useEffect, useState } from "react";

import { Product } from "../interfaces";
import * as MedusaApiReq from "../MedusaApiReq";

import "./ProductLists.css";

import { BsFillCartPlusFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";

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
      <div className="container text-center text-light">
        <h1>
          <MdProductionQuantityLimits />
          Product Lists
        </h1>
      </div>

      <div className="wrapper">
        <div className="container">
          <div className="row">
            {productList.map((prodList: Product, key: number) => (
              <div className="col-md-3" key={key}>
                <div className="product-list">
                  <div className="product-image">
                    <img
                      src={prodList.thumbnail}
                      alt={prodList.title}
                      className="img-responsive"
                    />
                  </div>
                  <div className="product-handle">
                    <div className="category">
                      <span>{prodList.handle}</span>
                    </div>
                    <div className="product-title">
                      <h3>{prodList.title}</h3>
                    </div>
                    <div className="product-description">
                      <p>{prodList.description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="product-price">
                        <span className="price">
                          {prodList.variants.map((variant: any) => {
                            return (
                              <>
                                {variant.prices.map((price: any) => {
                                  return (
                                    <>
                                      {price.currency_code}: ${price.amount}
                                    </>
                                  );
                                })}
                              </>
                            );
                          })}
                        </span>
                      </div>
                      <div className="product-cart">
                        <a href="#" className="product-buy-btn">
                          <BsFillCartPlusFill />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductLists;
