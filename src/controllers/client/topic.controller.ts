import { Request, Response } from "express"
import Topic from "../../models/topic.model";

export const index = async (req: Request, res: Response) => {
  
  let find = {
    deleted: false
  }
  const topics = await Topic.find(find);
  res.render("client/pages/topic/index" , {
    title: "Topic",
    topics: topics
  });
}