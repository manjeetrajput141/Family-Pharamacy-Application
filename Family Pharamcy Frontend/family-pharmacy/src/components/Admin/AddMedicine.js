import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";

const AddMedicine = () => {
  const [product, setProduct] = useState({});
  const [cat, setCat] = useState(null);

  // Submit Function
  const submitFunc = (e) => {
    e.preventDefault();

    if (!cat) {
      toast.error("Choose Category");
      return;
    }

    // Create FormData for file upload
    const formData = new FormData();
    formData.append("productBatch", product.productBatch);
    formData.append("productName", product.productName);
    formData.append("productDesc", product.productDesc);
    formData.append("productPrice", product.productPrice);   // ✅ Added Price
    formData.append("productQuantity", product.productQuantity); // ✅ Added Quantity
    formData.append("categoryId", cat);
    formData.append("imageFile", product.imageFile); // Image file

    // Send request
    axios
      .post(`${base_url}/family/products/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        toast.success("Item Added Successfully");
      })
      .catch((error) => {
        toast.error("Something went wrong!!\n" + error);
        console.log(error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-center">Fill the product details correctly</h2>
      <Form onSubmit={submitFunc}>
        <FormGroup>
          <label>Choose Category</label>
          <select onChange={(e) => setCat(e.target.value)}>
            <option>Select</option>
            <option value="1">Medicine</option>
            <option value="2">Food Item</option>
            <option value="3">Supplements</option>
            <option value="4">Cosmetics</option>
          </select>
        </FormGroup>

        <FormGroup>
          <Label>Product Batch Number</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, productBatch: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Name</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Description</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, productDesc: e.target.value })
            }
          />
        </FormGroup>

        {/* ✅ Price Field */}
        <FormGroup>
          <Label>Product Price</Label>
          <Input
            type="number"
            onChange={(e) =>
              setProduct({ ...product, productPrice: e.target.value })
            }
          />
        </FormGroup>

        {/* ✅ Quantity Field */}
        <FormGroup>
          <Label>Product Quantity</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, productQuantity: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup>
          <Label>Product Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProduct({ ...product, imageFile: e.target.files[0] })
            }
          />
        </FormGroup>

        <FormGroup>
          <Button color="primary" type="submit">
            Add
          </Button>
          <Button color="secondary" type="reset">
            Clear
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddMedicine;
