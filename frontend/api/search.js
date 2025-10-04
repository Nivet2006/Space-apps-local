export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.body || {};
  if (!query) return res.status(400).json({ error: "Query required" });

  // Mock dataset (replace with NASA data later)
  const data = {
    "Andromeda Galaxy": "A spiral galaxy approx. 2.5 million light-years from Earth.",
    "Martian Dust Storm": "Large regional dust storm observed on Mars.",
    "Lunar Crater Tycho": "Prominent crater on the Moon."
  };

  const results = Object.keys(data)
    .filter(key => key.toLowerCase().includes(query.toLowerCase()))
    .map(key => ({ feature: key, description: data[key] }));

  res.status(200).json({ query, results });
}
