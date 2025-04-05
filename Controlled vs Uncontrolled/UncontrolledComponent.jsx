import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Uncontrolled Input: </label>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

// ✅ Don't forget to export it
export default UncontrolledComponent;
