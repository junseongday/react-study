import React, { useContext } from 'react';
import { userDispatch } from './App';
const User = React.memo(({ user }) => {
  const { username, email, id, active } = user;
  const dispatch = useContext(userDispatch);
  return (
    <div>
      <b
        style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}
        onClick={() => dispatch({ type: 'TOGGLE_USER', id })}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>
      <button onClick={() => dispatch({ type: 'REMOVE_USER', id })}>
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users }) => {
  console.log(26, 'userlist');
  return (
    <div>
      {users.map((e) => (
        <User user={e} key={e.id} />
      ))}
    </div>
  );
};

export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
