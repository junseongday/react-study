import './styles.css';
import UserList from './UserList';
import React, { useMemo, useReducer, createContext } from 'react';
import CreateUser from './CreateUser';
import produce from 'immer';
export const userDispatch = createContext(null);
const initialState = {
  users: [
    {
      id: 1,
      username: 'junseong',
      email: 'junseong@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'js',
      email: 'jun@gmail.com',
      active: false
    },
    {
      id: 3,
      username: 'John Doe',
      email: 'abc@gmail.com',
      active: false
    }
  ]
};
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      throw Error('Unhandled error');
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const countActiveUsers = (users) => {
    console.log('활성 사용자수 체크');
    return users.filter((user) => user.active).length;
  };
  const cnt = useMemo(() => countActiveUsers(users), [users]);
  return (
    <userDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>{cnt}</div>
    </userDispatch.Provider>
  );
}
