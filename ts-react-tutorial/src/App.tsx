import React from 'react';
import SampleContext from './SampleContext'
import ReducerSample from './ReducerSample';
function App() {
  const onSubmit = (form: {name:string, description: string}) => {
    console.log(form)
  }
  return (
    <SampleContext>
      <ReducerSample />
    </SampleContext>
  );
}

export default App;
