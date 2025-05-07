const db = require('_helpers/db');

async function create(params) {
    // Validate
    if (await db.Employee.findOne({ where: { email: params.email } })) {
        throw new Error('Email "' + params.email + '" is already taken');
    }

    const employee = new db.Employee(params);

    // Save employee
    await employee.save();

    return employee;
}

async function getAll() {
    return await db.Employee.findAll();
}

async function getById(id) {
    return await getEmployee(id);
}

async function update(id, params) {
    const employee = await getEmployee(id);

    // Validate
    const emailChanged = params.email && employee.email !== params.email;
    if (emailChanged && await db.Employee.findOne({ where: { email: params.email } })) {
        throw new Error('Email "' + params.email + '" is already taken');
    }

    // Copy params to employee and save
    Object.assign(employee, params);
    await employee.save();

    return employee;
}

async function _delete(id) {
    const employee = await getEmployee(id);
    await employee.destroy();
}

async function transfer(employeeId, departmentId) {
    const employee = await getEmployee(employeeId);
    employee.departmentId = departmentId;
    await employee.save();
}

// Helper functions

async function getEmployee(id) {
    const employee = await db.Employee.findByPk(id);
    if (!employee) throw new Error('Employee not found');
    return employee;
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete,
    transfer
};