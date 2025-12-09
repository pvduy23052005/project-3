import { Router } from "express";
const router : Router = Router(); 
import * as controller from  "../../controllers/client/song.controller";

router.get("/:slug", controller.index);

export const songRoute : Router = router;