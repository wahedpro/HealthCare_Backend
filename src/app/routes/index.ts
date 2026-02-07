import { Router } from "express";
import { SpecialtyRoutes } from "../module/speciality/speciality.route";

const router = Router();
router.use("/specialties", SpecialtyRoutes);

export const IndexRouts = router;