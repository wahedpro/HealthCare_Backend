import { Router } from "express";
import { SpecialtyRoutes } from "../module/speciality/speciality.route";
import { authRoutes } from "../module/auth/auth.route";
import { UserRoutes } from "../module/user/user.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/specialties", SpecialtyRoutes);
router.use("/users", UserRoutes);
router.use("/doctors", DoctorRoutes);

export const IndexRouts = router;