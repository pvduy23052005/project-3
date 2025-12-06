import express, { Request, Response, Express } from "express";

const app: Express = express();
const port: number | string = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
})

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});

