import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployeeById } from "../controllers/employees.controller.js";

const router = Router();


router.get('/empleados', getEmployees);

router.get('/empleados/:id', getEmployeeById);

router.post('/empleados', createEmployees);

router.patch('/empleados/:id', updateEmployees);

router.delete('/empleados/:id', deleteEmployees);

export default router;