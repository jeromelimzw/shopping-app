import React from "react";

const ProductCard = ({
  productName,
  productDescription,
  productImgUrl,
  productPrice,
  productQuantity
}) => {
  return (
    <div className="flex f4 mv2 bg-lightest-blue o-80 ba b--light-blue bw2 br3 shadow-5">
      <div className="w-20 flex mh2">
        <img src={productImgUrl} className="self-center" alt={productName} />
      </div>
      <div className="w-60 ph2">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
      </div>
      <div className="w-20 ph2">
        <p>
          Price:
          <br /> SGD {productPrice}
        </p>
        <p>
          Quantity:
          <select className="mh2 bg-light-green br2">
            {<option value="1">1</option>}
          </select>
          <small className="dib">{productQuantity} pieces remaining</small>
          <input
            type="submit"
            value="Add to Cart"
            className="mv2 br2 bg-green white pointer"
          />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
