import {
  getAllEmployees,
  getEmployeeByIdService,
  createEmployeeService,
  updateEmployeeService,
  deleteEmployeeService
} from "../services/employees.service.js";

export const getEmployees = async (req, res, next) => {
  try {
    const rows = await getAllEmployees();
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await getEmployeeByIdService(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(employee);
  } catch (error) {
    next(error);
  }
};

export const createEmployees = async (req, res, next) => {
  const { name, salary } = req.body;
  try {
    const employee = await createEmployeeService(name, salary);
    res.send(employee);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployees = async (req, res, next) => {
  try {
    const deleted = await deleteEmployeeService(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Empleado no encontrado" });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const updateEmployees = async (req, res, next) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const updated = await updateEmployeeService(id, name, salary);
    if (!updated)
      return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
