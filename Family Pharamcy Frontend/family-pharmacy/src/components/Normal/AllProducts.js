import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";
import ProductForUser from "./Product";
import { useNavigate } from "react-router-dom";

const AllProducts = ({ addToCart, cartItems }) => {
  const [medicine, setMedicine] = useState([]);
  const navigate = useNavigate();

  const loadDataFromServer = () => {
    axios.get(`${base_url}/family/products/all`).then(
      (response) => {
        setMedicine(response.data);
        toast.success("All Product Loaded successfully");
      },
      (error) => {
        console.log("Something went wrong from server site");
      }
    );
  };

  useEffect(() => {
    loadDataFromServer();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>All Items</h1>
        {/* Cart Button */}
        <Button color="info" onClick={() => navigate("/cart")}>
          🛒 Cart ({cartItems.length})
        </Button>
      </div>

      <Button color="primary">All Products</Button>
      <div>
        {medicine.length > 0 ? (
          medicine.map((item) => (
            <ProductForUser
              key={item.productId}
              product={item}
              addToCart={addToCart}
            />
          ))
        ) : (
          "No Medicine Available"
        )}
      </div>
    </>
  );
};

export default AllProducts;
