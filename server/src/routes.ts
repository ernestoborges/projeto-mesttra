import express, { Router } from "express";
import { createUser } from "./controllers/userController";

const router = Router();

router.post('/create-user', createUser );

export default router;