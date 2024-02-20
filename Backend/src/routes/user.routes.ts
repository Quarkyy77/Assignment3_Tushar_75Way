import express from "express";
import { isUserAuthenticated } from "../middlewares/auth";
import { createShiftRequest } from "../controllers/user.controller";

const router = express.Router();

router.post("/createShiftRequest", isUserAuthenticated, createShiftRequest);

export default router;
