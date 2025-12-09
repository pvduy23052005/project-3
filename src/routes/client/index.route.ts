import { Express } from "express"
import { topicRoute } from "./topic.route";

const indexRoute = (app: Express) => {
  app.use("/topic", topicRoute);
}

export default indexRoute;