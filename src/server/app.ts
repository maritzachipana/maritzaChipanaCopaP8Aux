import express from "express";
import morgan from "morgan";
import routes from "../routes";

class Application {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
    this.app.use("/", routes);
  }
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`server running on port ${this.app.get("port")}`);
    });
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

export default Application;
