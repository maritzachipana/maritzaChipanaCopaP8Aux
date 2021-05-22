import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    '<h1 style="margin: 80px 80px 0px 80px">' +
      "your full name" +
      "</h1>" +
      '<p style="margin: 20px 0px 0px 80px">' +
      "this is my Api" +
      "</p>"
  );
});

export default router;
