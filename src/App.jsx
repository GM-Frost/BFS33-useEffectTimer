import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./components/timer";

function App() {
  const title = "JavaScript ?";

  return (
    <>
      <Timer title={title} />
    </>
  );
}

export default App;
