import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  const inputName = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onReset = () => {
    setInputs({ name: "", nickname: "" });
    inputName.current.focus();
  };
  return (
    <>
      <input
        ref={inputName}
        onChange={onChange}
        name="name"
        placeholder="name"
        value={name}
      />
      <input
        onChange={onChange}
        name="nickname"
        placeholder="nickname"
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값: {name}({nickname})
        </b>
      </div>
    </>
  );
}

export default InputSample;
