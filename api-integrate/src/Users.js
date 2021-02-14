import React, { useState } from "react";
import User from "./User";
import { getUsers, useUsersDispatch, useUsersState } from "./UserContext";

export default function Users() {
  const [userId, setUserId] = useState(null);
  const { data: users, loading, error } = useUsersState().users;
  const dispatch = useUsersDispatch();
  const fetchUsers = () => {
    getUsers(dispatch);
  };
  console.log(12, users, loading, error);
  if (loading) return <div>loading...</div>;
  if (error) return <div> error ocuur</div>;
  if (!users) return <button onClick={fetchUsers}>다시 불러오기</button>;
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
      <button onClick={fetchUsers}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}
