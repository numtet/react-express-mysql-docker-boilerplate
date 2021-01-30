import express, { NextFunction, Request, Response } from "express";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
