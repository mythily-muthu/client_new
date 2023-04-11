import React, { useEffect } from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0.5rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProductList = ({ products }) => {
  const getAllProducts = async (params) => {};

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product._id}>
          <ProductImage src={product.img} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.desc}</ProductDescription>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
