import { Router } from "express";
import { body, param } from "express-validator";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployeeById } from "../controllers/employees.controller.js";
import { validateRequest } from "../validators/employees.validator.js";

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployeeById);

router.post(
    '/employees',
    [
        body('name').isString().notEmpty().withMessage('El nombre es requerido'),
        body('salary').isNumeric().withMessage('El salario debe ser numérico'),
        validateRequest
    ],
    createEmployees
);

router.patch(
    '/employees/:id',
    [
        param('id').isInt().withMessage('ID inválido'),
        body('name').optional().isString().withMessage('El nombre debe ser texto'),
        body('salary').optional().isNumeric().withMessage('El salario debe ser numérico'),
        validateRequest
    ],
    updateEmployees
);

router.delete('/employees/:id', deleteEmployees);

export default router;