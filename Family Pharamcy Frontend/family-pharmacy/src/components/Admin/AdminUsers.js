import { useEffect, useState } from "react";
import api from "./api";


export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/family/users/all")
       .then(res => setUsers(res.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Admin: Users</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
