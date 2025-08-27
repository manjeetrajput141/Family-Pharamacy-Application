import {jwtDecode } from "jwt-decode";

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}
export const removeToken = () => {
  localStorage.removeItem("token");
};


export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export function isLoggedIn() {
  const token = getToken();
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    // exp is in seconds
    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
}

export default function getUser() {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token); // contains "sub" (username) + any claims you added
  } catch {
    return null;
  }
}
