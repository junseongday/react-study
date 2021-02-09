import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
// import Hello from './Hello';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    {/* <Hello name="react" color="orange" isSpecial /> */}
    <Counter />
  </StrictMode>,
  rootElement
);
