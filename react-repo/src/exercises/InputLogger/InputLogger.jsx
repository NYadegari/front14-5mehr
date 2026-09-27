import React, { useState } from "react";
// useState, useEffect

const InputLogger = () => {
  const [inputText, setInputText] = useState("");

  function handleClick() {
    console.log("Value is:", inputText);
  }

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        placeholder="Type sth and click btn..."
      />
      <button onClick={handleClick}>show in console</button>
    </>
  );
};

export default InputLogger;
