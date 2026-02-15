import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// create speciality
const createSpeciality = async(payload: Speciality): Promise<Speciality> => {
  const speciality = await prisma.speciality.create({
    data: payload
  })
  return speciality
}

// get all the speciality
const getAllSpecialities = async (): Promise<Speciality[]> =>{
  const specialities = await prisma.speciality.findMany();
  return specialities;
}
  
// deleteSpeciality
const deleteSpeciality = async (id: string):  Promise<Speciality> =>{
  const speciality = await prisma.speciality.delete({
    where: {id}
  })
  return speciality;
}

export const SpecialityService = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality
}

