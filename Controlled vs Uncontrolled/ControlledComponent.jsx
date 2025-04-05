import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Controlled Input: </label>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

// ✅ Add this:
export default ControlledComponent;
