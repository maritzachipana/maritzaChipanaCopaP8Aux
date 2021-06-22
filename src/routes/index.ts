import {Router} from "express";
import UserRoutes from './user';
import PostRoutes from './post';
import ImageRoutes from './Image';

const router = Router();
router.use( "/user", UserRoutes);
router.use( "/post", PostRoutes);
router.use("/Image", ImageRoutes);

export default router;
