import React, { useState } from "react";
import Viewer from "./components/Viewer";
import AnnotationPanel from "./components/AnnotationPanel";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [annotations, setAnnotations] = useState([]);

  const handleAddAnnotation = (annotation) => {
    setAnnotations([...annotations, annotation]);
  };

  return (
    <div className="app">
      <h1>🚀 NASA Visual Explorer</h1>
      <SearchBar />
      <Viewer annotations={annotations} onAddAnnotation={handleAddAnnotation} />
      <AnnotationPanel annotations={annotations} />
    </div>
  );
}
