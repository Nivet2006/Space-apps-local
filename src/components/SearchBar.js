import React, { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.post("/api/search", { query });
    setResults(res.data.results);
  };

  return (
    <div style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <input
        type="text"
        value={query}
        placeholder="Search NASA features..."
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            <b>{r.feature}</b>: {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
