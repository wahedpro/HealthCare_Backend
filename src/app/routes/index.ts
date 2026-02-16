import { Router } from "express";
import { SpecialtyRoutes } from "../module/speciality/speciality.route";
import { authRoutes } from "../module/auth/auth.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/specialties", SpecialtyRoutes);

export const IndexRouts = router;