import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UserContext";

export default function User({ id }) {
  const { data: user, loading, error } = useUsersState().user;
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

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
