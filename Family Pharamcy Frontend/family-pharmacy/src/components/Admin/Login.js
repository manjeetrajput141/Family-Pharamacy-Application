import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1990/auth/login", {
        username,
        password,
      });

      // ✅ Save token
      localStorage.setItem("token", response.data.token);

      // ✅ Redirect
      navigate("/admin/home");
    } catch (err) {
      alert("❌ Invalid username or password!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/images/default.jpeg')",
        height: "100vh",
        backdropFilter: "blur(8px)",
        backgroundColor: "#f0f2f5",
      }}
    >
     
      <form
        onSubmit={handleLogin}
        style={{
          border: "1px solid #ccc",
          padding: "40px",
          borderRadius: "10px",
          width: "400px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "28px",
            color: "#333",
          }}
        >
           Login !!
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "16px" }}>
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #aaa",
              borderRadius: "6px",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "16px" }}>
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #aaa",
              borderRadius: "6px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
       <p className="text-sm text-gray-500 text-center mt-4">
          © {new Date().getFullYear()} Family Pharmacy
        </p>
        
    </div>
  );
}

export default Login;






























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:1990/auth/login", {
//         username,
//         password,
//       });

//       // ✅ Save token
//       localStorage.setItem("token", response.data.token);

//       // ✅ Redirect to admin home
//       console.log("Navigate to admin home");
//       navigate("/admin/home");
//       console.log("Navigate to admin home");
      
//     } catch (err) {
//       alert("Invalid username or password!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Enter Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
