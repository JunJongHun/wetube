import "./db";
import "./models/Video";
import "./models/User";

import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`site : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
