import { Button, Card, CardBody, CardText } from "reactstrap";

const WCart = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return <h4 className="text-center mt-4">🛒 Cart is Empty</h4>;
  }

  // ✅ Calculate grand total
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.productPrice,
    0
  );

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    // here you can integrate backend API call later
    
  };
  

  return (
    <div>
      <h3 className="mb-3">Your Cart</h3>

      {cartItems.map((item) => (
        <Card className="mb-3" key={item.productId}>
          <CardBody className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.productName}</h5>
              <CardText>
                Quantity: {item.quantity} | Price: ₹{item.productPrice}
              </CardText>
            </div>
            <div>
              <strong>₹{item.quantity * item.productPrice}</strong>
            </div>
            <Button
              color="danger"
              onClick={() => removeFromCart(item.productId)}
            >
              Remove
            </Button>
          </CardBody>
        </Card>
      ))}

      {/* ✅ Total and Place Order button */}
      <Card className="mt-4">
        <CardBody className="d-flex justify-content-between align-items-center">
          <h4>Total: ₹{totalAmount}</h4>
          <Button color="success" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WCart;
