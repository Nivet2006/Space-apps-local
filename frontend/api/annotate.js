let annotations = []; // in-memory storage

export default function handler(req, res) {
  if (req.method === "POST") {
    const { x, y, note } = req.body || {};
    if (!note) return res.status(400).json({ error: "Note is required" });

    const annotation = { id: Date.now(), x, y, note };
    annotations.push(annotation);

    res.status(200).json({ success: true, annotation });
  } else if (req.method === "GET") {
    res.status(200).json({ annotations });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
