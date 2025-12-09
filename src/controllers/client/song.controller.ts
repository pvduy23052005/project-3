import { Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";

// [get] /topic/:slug.
export const index = async (req: Request, res: Response) => {
    try {
        const slug: string = req.params.slug;

        const topic :any = await Topic.findOne({
            slug: slug,
            status: "active",
            deleted: false
        }).select("id");
        const songs = await Song.find({
            topicId : topic.id, 
            deleted : false, 
            status : "active"
        }) ; 
                
        res.render("client/pages/songs/index", {
            title : slug ,
            songs : songs
        });

    } catch (error) {
        console.log(error);
    }
}