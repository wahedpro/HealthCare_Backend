import express, { Application, NextFunction, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRouts } from "./app/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";

const app: Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", IndexRouts)

// Basic route
app.get('/', async(req: Request, res: Response) => {
  const Speciality = await prisma.speciality.create({
    data: {
      title: 'Cardiology',
    },
  });
  res.status(201).json({
    success: true,
    message: 'API is working!',
    speciality: Speciality,
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;