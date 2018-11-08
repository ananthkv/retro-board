import React, { Component, useState } from "react";
import { getUniverse } from "retro-board-common";
import { Input } from "@material-ui/core";

function App() {
  const [title, setTitle] = useState("hello");
  return (
    <div>
      <h1>
        Empty {getUniverse()} {title}
      </h1>
      <p>
        <Input value={title} onChange={v => setTitle(v.target.value)} />
      </p>
    </div>
  );
}

export default App;
