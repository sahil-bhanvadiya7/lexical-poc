import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "./editor/Editor.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="App">
      <Editor />
    </div>
  </React.StrictMode>
);
