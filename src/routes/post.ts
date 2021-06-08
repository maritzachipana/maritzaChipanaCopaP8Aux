import {Router} from "express";
import {PostControllers} from '../controllers/post';
import post from '../models/post';

const router = Router()
router.get("/", PostControllers.index);
router.post("/createP", PostControllers.createP);
router.put("/updateP/:id", PostControllers.updateP);
router.delete("/deleteP/:id", PostControllers.deleteP);

export default router;