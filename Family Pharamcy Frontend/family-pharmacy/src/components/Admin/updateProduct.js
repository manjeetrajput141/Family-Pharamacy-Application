import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "../../constants/constants";

const UpdateProduct = () => {
  const { id } = useParams(); // get product id from route
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // start with null
    const catId=0;
  // fetch existing product by ID
  useEffect(() => {
    console.log("Not working");
    axios
      .get(`${base_url}/family/products/id/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        
        //console.log("Response "+product);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load product details");
      });
  }, [id]);

  const [formData, setFormData] = useState({
    productBatch: "",
    productName: "",
    productDesc: "",
    productPrice: "",
    productQuantity: "",
    imageFile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("productBatch", formData.productBatch || product.productBatch);
    data.append("productName", formData.productName || product.productName);
    data.append("productDesc", formData.productDesc || product.productDesc);
    data.append("productPrice", formData.productPrice || product.productPrice);
    data.append("productQuantity", formData.productQuantity || product.productQuantity);

   
    axios
      .put(`${base_url}/family/products/update/${id}/${product.category.categoryId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        toast.success("Product updated successfully");
        navigate("/products"); // redirect after update
      })
      .catch((err) => {
        console.log(err);
        toast.error("Update failed");
      });
  };

  if (!product) return <p className="text-center mt-3">Loading...</p>;

  return (
    <div>
      <ToastContainer />
      <h2 className="text-center">Update Product</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Product Batch Number</Label>
          <Input
            type="text"
            name="productBatch"
            placeholder={product.productBatch} // ✅ show old value in placeholder
            value={formData.productBatch}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Name</Label>
          <Input
            type="text"
            name="productName"
            placeholder={product.productName}
            value={formData.productName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Description</Label>
          <Input
            type="text"
            name="productDesc"
            placeholder={product.productDesc}
            value={formData.productDesc}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Price</Label>
          <Input
            type="number"
            name="productPrice"
            placeholder={product.productPrice}
            value={formData.productPrice}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Quantity</Label>
          <Input
            type="text"
            name="productQuantity"
            placeholder={product.productQuantity}
            value={formData.productQuantity}
            onChange={handleChange}
          />
        </FormGroup>

       

        <FormGroup>
          <Button color="primary" type="submit">
            Update
          </Button>
          <Button color="secondary" type="reset">
            Reset
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default UpdateProduct;
