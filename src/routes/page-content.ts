import { Router } from "express";
import { index } from "../controllers/page-content.controller";

const router = Router();

router.post("/", index);

export default router;
