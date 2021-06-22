import {Router} from "express";
import {ImageControllers} from  '../controllers/Image';
import image from '../models/Image';

const router = Router();
router.get("/", ImageControllers.index);
router.post("/newImage", ImageControllers.newImage);
router.get("/getImage/:filename", ImageControllers.getImage);

export default router;