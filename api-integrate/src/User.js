import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUser(id) {
  console.log(6, id);
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
export default function User({ id }) {
  const [{ loading, data: user, error }] = useAsync(() => getUser(id), [id]);
  console.log(19, id, user);
  if (loading) return <div>loading...</div>;
  if (error) return <div> error ocuur</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}
