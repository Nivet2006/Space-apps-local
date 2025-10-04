// /api/annotate.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { coords, label } = req.body;

  // Mock storage – in production you’d save to a DB
  const savedAnnotation = { id: Date.now(), coords, label };

  res.status(200).json({ message: "Annotation saved", annotation: savedAnnotation });
}
