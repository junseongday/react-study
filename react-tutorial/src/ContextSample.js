import React, { useContext, createContext, useState } from 'react';
const MyContext = createContext('Default value');
function Child() {
  const text = useContext(MyContext);
  return <div>Hello {text}</div>;
}
function Parent() {
  return <Child />;
}
function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [isGood, setIsGood] = useState(false);
  return (
    <MyContext.Provider value={isGood ? 'GOOD' : 'BAD'}>
      <GrandParent />
    </MyContext.Provider>
  );
}

export default ContextSample;
