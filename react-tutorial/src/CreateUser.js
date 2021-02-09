import React, { useContext, useRef } from 'react';
import { userDispatch } from './App';
import useInput from './useInput';

const CreateUser = () => {
  console.log(4, 'createuser');
  const [{ username, email }, onChange, reset] = useInput({
    username: '',
    email: ''
  });
  const dispatch = useContext(userDispatch);
  const nextId = useRef(4);
  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current++;
    reset();
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
