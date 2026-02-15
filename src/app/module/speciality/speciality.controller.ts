import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpeciality = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await SpecialityService.createSpeciality(payload);
    res.status(201).json({
      success: true,
      message: 'Speciality create successfully',
      data: result
    });
  }
)

const getAllSpecialities = catchAsync(
  async (req: Request, res: Response) => {
    const specialites = await SpecialityService.getAllSpecialities();
    res.status(200).json({
      success: true,
      message: "Specialites fetched successfully!",
      data: specialites
    })
  }
)

const deleteSpeciality = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SpecialityService.deleteSpeciality(id as string);
    res.status(200).json({
      success: true,
      message: "speciality delete successfully!",
      data: result
    })
  }
)

export const SpecialityController = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality
}