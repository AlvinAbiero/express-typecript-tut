import express, { Express, Request, Response } from "express";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TS (Not TS Yet !!!!!)");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("Byee!!");
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
