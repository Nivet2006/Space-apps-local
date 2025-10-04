import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AnnotationPanel() {
  const [annotations, setAnnotations] = useState([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    axios.get("/api/annotate").then(res => {
      setAnnotations(res.data.annotations);
    });
  }, []);

  const handleAdd = async () => {
    if (!note) return;
    const res = await axios.post("/api/annotate", { x: 0, y: 0, note });
    setAnnotations([...annotations, res.data.annotation]);
    setNote("");
  };

  return (
    <div style={{ width: "30%", padding: "10px", background: "#f5f5f5" }}>
      <h3>📝 Annotations</h3>
      <ul>
        {annotations.map(a => (
          <li key={a.id}>{a.note}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a note..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
