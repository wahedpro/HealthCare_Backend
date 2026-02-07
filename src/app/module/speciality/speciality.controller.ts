import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";

const createSpeciality = async (req:Request, res:Response) => {
  try {
    const payload = req.body;
    const result = await SpecialityService.createSpeciality(payload);
    res.status(201).json({
        success: true,
        message: 'Speciality create successfully',
        data: result
    });
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const SpecialityController = {
  createSpeciality
}