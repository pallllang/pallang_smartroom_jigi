import "./db";
import "./models/Book";
import app from "./server";

const PORT = 3500;

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);