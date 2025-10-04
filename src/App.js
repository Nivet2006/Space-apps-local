import React from "react";
import Viewer from "./components/Viewer";
import AnnotationPanel from "./components/AnnotationPanel";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🌌 NASA Visual Explorer</h1>
      <SearchBar />
      <div style={{ display: "flex", flex: 1 }}>
        <Viewer />
        <AnnotationPanel />
      </div>
    </div>
  );
}

export default App;
