import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  console.log(req);
  console.log("handleHome");
};

app.get("/", handleHome);

const handleListening = () => console.log(`sdaf: ${PORT}`);

app.listen(PORT, handleListening);

print("노트북으로 시도");
