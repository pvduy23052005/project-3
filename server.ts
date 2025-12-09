import express, { Express } from "express";
import path from 'path';
import dotenv from "dotenv";
import * as database from "./src/config/database";
import clientRoute from "./src/routes/client/index.route";

dotenv.config();

const app: Express = express() ;
const port: number | string = process.env.PORT || 5050;

app.set('views', path.join(__dirname, "src", 'views'));
app.set('view engine', 'pug');

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "src", 'public')));

database.connectDatabase();

clientRoute(app);

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});