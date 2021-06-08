import {Router} from "express";
import {UserControllers} from '../controllers/user';
import user from '../models/user';

const router = Router()
router.get("/", UserControllers.index);
router.post("/createU", UserControllers.createU);
router.put("/updateU/:id", UserControllers.updateU);
router.delete("/deleteU/:id", UserControllers.deleteU)

export default router;
