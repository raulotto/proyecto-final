
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <div className='info-top'><h2>{product.title}</h2></div>
    <div className='info-bottom'><span>${product.price}</span>
    <a href="#"><FaArrowRight /></a></div>
  </div>
);

export default ProductCard;
