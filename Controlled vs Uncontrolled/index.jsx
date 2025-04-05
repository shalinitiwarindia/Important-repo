//Controlled Component
import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name} // Controlled by React
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

//Uncontrolled Compopnent
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("Input value is: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} /> {/* DOM handles this */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
