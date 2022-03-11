import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("handleHome");

app.get("/", handleHome);

const handleListening = () => console.log(`sdaf: ${PORT}`);

app.listen(PORT, handleListening);

print("노트북으로 시도");
