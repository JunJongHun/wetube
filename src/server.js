import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  console.log(req);
  console.log("handleHome");
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("hi hi hi this is login part!");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`sdaf: ${PORT}`);

app.listen(PORT, handleListening);
