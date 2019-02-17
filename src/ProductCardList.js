import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ productinfo, searchfield }) => {
  return (
    <div>
      {productinfo.length === 0 ? (
        <small className="f4 ph2 ma0">
          no items fitting criteria in stock, please try again later
        </small>
      ) : (
        <small className="f4 ph2 ma0">
          displaying {productinfo.length} items...
        </small>
      )}
      {productinfo.map(product => (
        <ProductCard
          productName={product.productName}
          productDescription={product.productDescription}
          productImgUrl={product.productImgUrl}
          productPrice={product.productPrice}
          productQuantity={product.productQty}
          key={product.key}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
