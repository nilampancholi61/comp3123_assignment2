const express = require('express');
const {
    createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee, searchEmployee,
} = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEmployee);
router.get('/', authMiddleware, getAllEmployees);
router.get('/:id', authMiddleware, getEmployeeById);
router.put('/:id', authMiddleware, updateEmployee);
router.delete('/:id', authMiddleware, deleteEmployee);
router.get('/search', authMiddleware, searchEmployee);

module.exports = router;
