import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialityService.createSpeciality(payload);
    res.status(201).json({
      success: true,
      message: 'Speciality create successfully',
      data: result
    });
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "failed to create speciality",
      error: error.message
    });
  }
};

const getAllSpecialities = async (req: Request, res: Response) => {
  try{
    const specialites  = await SpecialityService.getAllSpecialities();
    res.status(200).json({
      success: true,
      message: "Specialites fetched successfully!",
      data: specialites
    })
  }catch(error: any){
    console.log(error)
    res.status(500).json({
      success: false,
      message: "failed to create speciality",
      error: error.message
    });
  }
}

const deleteSpeciality = async (req: Request, res: Response) => {
  try{
    const {id} = req.params;
    const result = await SpecialityService.deleteSpeciality(id as string);
    res.status(200).json({
      success: true,
      message: "speciality delete successfully!",
      data: result
    })
  }catch(error: any){
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to delete speciality",
      error: error.message
    })
  }
}



export const SpecialityController = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality
}