import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Row, Container, Col } from 'reactstrap';

import AllMedicine from './components/Admin/AllMedicine';
import Medicines from './components/Admin/Medicines';
import AllProducts from './components/Normal/AllProducts';
import FoodItems from './components/Admin/FoodItems';
import CosmeticItems from './components/Admin/CosmeticsItems.js';
import Home from './components/Home';
import AddMedicine from './components/Admin/AddMedicine.js';
import FoodProducts from './components/Normal/FoodProducts';
import CosmeticProducts from './components/Normal/CosmeticProducts';
import MedicineProducts from './components/Normal/MedicineProducts';
import Welcome from './components/Welcome';
import Suppliments from './components/Admin/Suppliments';
import Cart from './components/Normal/Cart';
import UpdateProduct from "./components/Admin/updateProduct";
import UserMenus from "./components/UserMenus";
import Login from "./components/Admin/Login";
import NormalHello from "./components/Admin/NormalHello";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import AdminUsers from "./components/Admin/AdminUsers";
import WFoodProducts from "./components/Without Login/WFoodProducts";
import WAllProducts from "./components/Without Login/WAllProducts";
import WCosmeticProducts from "./components/Without Login/WCosmeticProducts";
import WSuppliments from "./components/Without Login/WSuppliments";
import WMedicineProducts from "./components/Without Login/WMedicineProducts";
import SupplimentsItem from "./components/Normal/SupplimentsItem";
import WCart from "./components/Without Login/WCart";
import LoginMenus from "./components/LoginMenus";
import AdminMenus from "./components/AdminMenus";

function App() {
  // ✅ Central cart state
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.productId === product.productId);
      if (exists) {
        return prev.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, { ...product }];
      }
    });
  };

  // ✅ Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  // ✅ Clear entire cart
  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Container>
        <Header />
        <Row>
          <Col md={3}>
            {/* Menu changes based on route */}
            <Routes>
              <Route path="/admin/*" element={<AdminMenus />} />
              <Route path="/user/*" element={<UserMenus />} />
              <Route path="/*" element={<LoginMenus />} />
            </Routes>
          </Col>

          <Col md={9}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/normal" element={<NormalHello />} />

              {/* ✅ Admin Section (Protected) */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    <Routes>
                      <Route path="view-all" element={<AllMedicine />} />
                      <Route
                        path="view-products"
                        element={<AllProducts addToCart={addToCart} cartItems={cartItems} />}
                      />
                      <Route path="view-medicine" element={<Medicines />} />
                      <Route path="cosmetics" element={<CosmeticItems />} />
                      <Route
                        path="cart"
                        element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
                      />
                      <Route path="add-medicine" element={<AddMedicine />} />
                      <Route path="food-item" element={<FoodItems />} />
                      <Route path="suppliments" element={<Suppliments />} />
                      <Route path="home" element={<Home />} />
                      <Route path="products/update/:id" element={<UpdateProduct />} />
                      <Route path="users" element={<AdminUsers />} />
                    </Routes>
                  </ProtectedRoute>
                }
              />

              {/* ✅ User Section (Public for now) */}
              <Route
                path="/user/view-all"
                element={<AllProducts addToCart={addToCart} cartItems={cartItems} />}
              />
              <Route path="/user/food-item" element={<FoodProducts />} />
              <Route path="/user/cosmetics" element={<CosmeticProducts />} />
              <Route path="/user/suppliments" element={<SupplimentsItem />} />
              <Route path="/user/view-medicines" element={<MedicineProducts />} />
              <Route
                path="/user/cart"
                element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
              />
              <Route path="/user/home" element={<Home />} />
           

                {/* Without Login */}
                 <Route
                path="/view-all"
                element={<WAllProducts addToCart={addToCart} cartItems={cartItems} />}
              />
              <Route path="/food-item" element={<WFoodProducts />} />
              <Route path="/cosmetics" element={<WCosmeticProducts />} />
              <Route path="/suppliments" element={<WSuppliments />} />
              <Route path="/view-medicines" element={<WMedicineProducts />} />
              <Route
                path="/user/cart"
                element={<WCart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
              />
              <Route path="/home" element={<Home />} />
            </Routes>


          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;




































// import React, { useState } from "react";
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import { Row ,Container, Col } from 'reactstrap';
// import AllMedicine from './components/Admin/AllMedicine';
// import Medicines from './components/Admin/Medicines';
// import AllProducts from './components/Normal/AllProducts';
// import FoodItems from './components/Admin/FoodItems';
// import updateProduct from './components/Admin/updateProduct';
// import CosmeticItems from './components/Admin/CosmeticsItems';

// import Home from './components/Home';

// import AddMedicine from './components/Admin/AddMedicine';
// import Menus from './components/Menus';

// import FoodProducts from './components/Normal/FoodProducts';
// import CosmeticProducts from './components/Normal/CosmeticProducts';
// import MedicineProducts from './components/Normal/MedicineProducts';
// import Welcome from './components/Welcome';
// import Suppliments from './components/Admin/Suppliments';
// import Cart from './components/Normal/Cart';
// import UpdateProduct from "./components/Admin/updateProduct";
// import UserMenus from "./components/UserMenus";
// import Login from "./components/Admin/Login";
// import NormalHello from "./components/Admin/NormalHello";
// import ProtectedRoute from "./components/Admin/ProtectedRoute";
// import AdminUsers from "./components/Admin/AdminUsers";

// function App() {
//   // ✅ Central cart state
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Add product to cart
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item.productId === product.productId);
//       if (exists) {
//         return prev.map((item) =>
//           item.productId === product.productId
//             ? { ...item, quantity: item.quantity + product.quantity }
//             : item
//         );
//       } else {
//         return [...prev, { ...product }];
//       }
//     });
//   };

//   // ✅ Remove product from cart
//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter((item) => item.productId !== productId));
//   };

//   // ✅ Clear entire cart
//   const clearCart = () => setCartItems([]);

//   return (
//     <Router>
//       <Container>
//         <Header />
//         <Row>
//           <Col md={3}>
//             {/* Menu changes based on route */}
//             <Routes>
//               <Route path="/admin/*" element={<Menus />} />
//               <Route path="/user/*" element={<UserMenus />} />
//             </Routes>
//           </Col>

//           <Col md={9}>
//             <Routes>
//               <Route path="/" element={<Welcome />} />
//                <Route path="/login" element={<Login />} />
//                <Route path="/normal" element={<NormalHello />} />
//                <Route
//                path="/admin"
//                element={
//               <ProtectedRoute>
//               <AdminUsers />
//                 </ProtectedRoute>
//           }
//         />

//               {/* ✅ Admin Section */}
//               <Route path="/admin/view-all" element={<AllMedicine />} />
//               <Route path="/admin/view-products" element={<AllProducts addToCart={addToCart} cartItems={cartItems} />} />
//               <Route path="/admin/view-medicine" element={<Medicines />} />
//               <Route path="/admin/cosmetics" element={<CosmeticItems />} />
//               <Route path="/admin/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
//               <Route path="/admin/add-medicine" element={<AddMedicine />} />
//               <Route path="/admin/food-item" element={<FoodItems />} />
//               <Route path="/admin/suppliments" element={<Suppliments />} />
//               <Route path="/admin/home" element={<Home />} />
//               {/* <Route path="/admin/user/signup" element={<SignUp />} /> */}
//               <Route path="/admin/products/update/:id" element={<UpdateProduct />} />

//               {/* ✅ User Section */}
//               <Route path="/user/view-all" element={<AllProducts addToCart={addToCart} cartItems={cartItems} />} />
//               <Route path="/user/food-item" element={<FoodProducts />} />
//               <Route path="/user/cosmetics" element={<CosmeticProducts />} />
//               <Route path="/user/suppliments" element={<CosmeticProducts />} />
//               <Route path="/user/view-medicines" element={<MedicineProducts />} />
//               <Route path="/user/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
//               {/* <Route path="/user/login" element={<Login />} /> */}
//               <Route path="/user/home" element={<Home />} />
//               {/* <Route path="/user/contact" element={<Contact />} /> */}
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </Router>
//   );
// }

// export default App;
