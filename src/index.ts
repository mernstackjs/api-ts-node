import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
type usersProp = {
  id: number;
  name: string;
};
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: false,
    message: "Api is working",
  });
});
app.get("/new/name", (req: Request, res: Response) => {
  res.status(200).json({
    name: "Ahmed Abdirizaak",
  });
});
app.get("/users", (req: Request, res: Response) => {
  const users: usersProp[] = [
    {
      id: 1,
      name: "Ahmed",
    },
    {
      id: 2,
      name: "Muna",
    },
  ];
  res.status(200).json({
    success: false,
    message: "is working",
    users,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
