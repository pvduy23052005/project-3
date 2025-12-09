import { Express } from "express"
import { topicRoute } from "./topic.route";
import { songRoute} from "./song.route";

const indexRoute = (app: Express) => {
  app.use("/topic", topicRoute);

  app.use("/songs" , songRoute);
}

export default indexRoute;  