import { useEffect, useState } from "react";
import api from "./api";

export default function NormalHello() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    api.get("/normal/hello").then(res => setMsg(res.data));
  }, []);
  return <h2>{msg || "Loading..."}</h2>;
}
