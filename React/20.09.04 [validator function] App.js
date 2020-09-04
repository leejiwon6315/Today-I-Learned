import React, { useState } from "react";
import "./App.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("", maxLen);
  return (
    <>
      <input placeholder="10 글자 까지 입력" {...name} />
    </>
  );
};

export default App;
