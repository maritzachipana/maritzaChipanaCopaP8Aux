import {Router} from "express";
import {UserControllers} from '../controllers/user';
import user from '../models/user';
import {jsonwebtokenSecurity} from "../libs/middleware";

const router = Router()
router.get("/", UserControllers.index);
router.post("/logln", UserControllers.logln);
router.post("/createU", UserControllers.createU);
router.put("/updateU/:id", UserControllers.updateU);
router.delete("/deleteU/:id", UserControllers.deleteU);
router.put("/postTouser/:idU", UserControllers.postTouser)
router.get("/getprofile/:id", jsonwebtokenSecurity, UserControllers.getprofile)

export default router;
