import React from 'react';
import products from "../products";
import {useParams} from "react-router-dom";

const ProductScreen = () => {
  const {id} = useParams();
  const product = products.find(item => item._id === id)
  return (
    <div>
      <div>
        {product?.name}
      </div>
    </div>
  );
};

export default ProductScreen;
