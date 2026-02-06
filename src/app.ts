import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";

const app: Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

export default app;