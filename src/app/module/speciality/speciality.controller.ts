import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpeciality = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await SpecialityService.createSpeciality(payload);
    sendResponse(res, {
      httpStatusCode: 201,
      success: true,
      message: 'Speciality create successfully',
      data: result
    })
  }
)

const getAllSpecialities = catchAsync(
  async (req: Request, res: Response) => {
    const specialites = await SpecialityService.getAllSpecialities();
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: 'Specialites fetched successfully!',
      data: specialites
    })
  }
)

const deleteSpeciality = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SpecialityService.deleteSpeciality(id as string);
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: 'speciality delete successfully!',
      data: result
    })
  }
)

const updateSpeciality = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await SpecialityService.updateSpeciality(id as string, payload);
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: 'speciality updated successfully!',
      data: result
    })
  }
)


export const SpecialityController = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
  updateSpeciality
}