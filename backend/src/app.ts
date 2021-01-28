import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// router
router.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    res.send("hello world");
  }
);

app.use("/", router);

app.listen(3001, () => {
  console.log("listening on port 3001");
});

export default app;
