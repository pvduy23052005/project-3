import express, { Request, Response, Express } from "express";
import path from 'path';
import dotenv from "dotenv";
import * as database from "./src/config/database";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 5050;

app.set('views', path.join(__dirname, "src", 'views'));
app.set('view engine', 'pug');

app.get("/", (req: Request, res: Response) => {
  res.render("pages/topic/index");
})

database.connectDatabase();

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});

