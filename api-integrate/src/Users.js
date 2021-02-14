import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};
export default function Users() {
  const [userId, setUserId] = useState(null);
  const { isLoading, data: users, error, run } = useAsync({
    deferFn: getUsers,
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div> error ocuur</div>;
  if (!users) return <button onClick={run}>다시 불러오기</button>;
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
      <button onClick={run}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}
