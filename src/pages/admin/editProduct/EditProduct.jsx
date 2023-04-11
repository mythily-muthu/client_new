import React, { useEffect, useState } from "react";
import "./editProduct.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PublishOutlined } from "@mui/icons-material";
import { updateProduct } from "../../../redux/apiCalls";

const EditProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let product = useSelector((state) =>
    state.product.products.find((product) => product._id === params.id)
  );
  const [productDetails, setProductDetails] = useState(product);

  const handleChange = (e) => {
    setProductDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleUpdateProduct = (e, id) => {
    e.preventDefault();
    updateProduct(id, productDetails, dispatch);
  };
  return (
    <div className="productBottom">
      <form className="productForm">
        <div className="productFormLeft">
          <label>Product Name</label>
          <input
            type="text"
            name={"title"}
            placeholder={productDetails.title}
            value={productDetails.title}
            onChange={handleChange}
          />
          <label>Product Description</label>
          <input
            type="text"
            name={"desc"}
            placeholder={productDetails.desc}
            value={productDetails.desc}
            onChange={handleChange}
          />
          <label>Price</label>
          <input
            type="text"
            name={"price"}
            placeholder={productDetails.price}
            value={productDetails.price}
            onChange={handleChange}
          />
          <label>In Stock</label>
          <select name="inStock" id="idStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img
              src={productDetails.img}
              onChange={handleChange}
              alt=""
              className="productUploadImg"
            />
            <label for="file">
              <PublishOutlined />
            </label>
            <input type="text" name="img" value={productDetails.img} />
          </div>
          <button
            className="productButton"
            onClick={(e) => handleUpdateProduct(e, productDetails._id)}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
