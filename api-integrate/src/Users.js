import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};
export default function Users() {
  const [userId, setUserId] = useState(null);
  const [{ loading, data: users, error }, refetch] = useAsync(
    getUsers,
    [],
    true
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div> error ocuur</div>;
  if (!users) return <button onClick={refetch}>다시 불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}
