import { pool } from "../db.js";

export const getAllEmployees = async () => {
    const [rows] = await pool.query("SELECT * FROM employees");
    return rows;
};

export const getEmployeeByIdService = async (id) => {
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
    return rows[0] || null;
};

export const createEmployeeService = async (name, salary) => {
    const [result] = await pool.query(
        "INSERT INTO employees (name, salary) VALUES (?, ?)",
        [name, salary]
    );
    return { id: result.insertId, name, salary };
};

export const updateEmployeeService = async (id, name, salary) => {
    const [result] = await pool.query(
        "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
        [name, salary, id]
    );
    if (result.affectedRows === 0) return null;
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
    return rows[0];
};

export const deleteEmployeeService = async (id) => {
    const [result] = await pool.query("DELETE FROM employees WHERE id = ?", [id]);
    return result.affectedRows > 0;
};
