import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, Container, Input } from "reactstrap";
import { toast } from "react-toastify";
import base_url from "../../constants/constants";
import { useState } from "react";

const WProductForUser = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="text-center mb-3">
      <CardBody>
        <div className="row">
          {/* Left side: Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={`${base_url}/family/products/images/${product.imageUrl}`}
              alt={product.productName}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
              onError={(e) => {
                e.target.src = "/images/default.jpeg"; // fallback image
              }}
            />
          </div>

          {/* Right side: Product details */}
          <div className="col-md-6 text-start position-relative">
            <CardFooter>Category: {product.category.categoryName}</CardFooter>

            <CardSubtitle>
              <h5>{product.productName}</h5>
            </CardSubtitle>

            {/* ✅ Price in top-right corner */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "#f8f9fa",
                padding: "5px 10px",
                borderRadius: "8px",
                fontWeight: "bold",
                color: "#198754"
              }}
            >
              ₹{product.productPrice}
            </div>

            <CardText>
              <h6>Batch No.</h6> {product.productBatch}
            </CardText>

            <CardText>{product.productDesc}</CardText>

            {/* ✅ Quantity + Description + Add to Cart */}
            <Container className="d-flex align-items-center justify-content-between mt-3">
              
              {/* Quantity Input */}
              <div className="d-flex align-items-center">
                <label className="me-2 fw-bold">Qty:</label>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{ width: "70px" }}
                />
              </div>

              {/* Small Description */}
              <div className="mx-3 text-muted" style={{ fontSize: "0.9rem" }}>
                {product.productQuantity || "No extra description"}
              </div>

              {/* Add to Cart Button */}
              <Button
                color="success"
                onClick={() => {
                  // addToCart({ ...product, quantity: parseInt(quantity) });
                  // toast.success(`${product.productName} (x${quantity}) added to cart!`);
                  toast.info("Please login to add the items to cart.");
                }}
              >
                Add to Cart
              </Button>
            </Container>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default WProductForUser;
