import React from "react";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Controlled Component</h2>
      <ControlledComponent />

      <hr style={{ margin: "30px 0" }} />

      <h2>❌ Uncontrolled Component</h2>
      <UncontrolledComponent />
    </div>
  );
}

export default App;
