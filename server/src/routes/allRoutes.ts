import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController";

const router = Router();

//projects routes
router.get("/projects", getProjects);
router.post("/projects", createProject);

//tasks routes
router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.patch("/tasks/:taskId", updateTaskStatus);

export default router;