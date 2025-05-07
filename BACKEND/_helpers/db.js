const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

  // init models and add them to the exported db object
  db.Account = require('../accounts/account.model')(sequelize);
  db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
  db.Employee = require('../employees/employees.model')(sequelize);
  db.Department = require('../departments/departments.model')(sequelize);
  db.Request = require('../requests/request.model')(sequelize);
  db.Workflow = require('../workflows/workflow.model')(sequelize);

  // define relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);

  // Employee belongs to Department
  db.Employee.belongsTo(db.Department, { foreignKey: 'departmentId', as: 'department' });
  db.Department.hasMany(db.Employee, { foreignKey: 'departmentId', as: 'employees' });

  //Workflow belongs to Employee
   db.Workflow.belongsTo(db.Employee, { foreignKey: 'employeeId', as: 'employee' });
   db.Employee.hasMany(db.Workflow, { foreignKey: 'employeeId', as: 'workflows' });

  //Requests belongs to Employee
  db.Request.belongsTo(db.Employee, { foreignKey: 'employeeId', as: 'employee' });
  db.Employee.hasMany(db.Request, { foreignKey: 'employeeId', as: 'requests' });

  // sync all models with database
  await sequelize.sync({ alter: true });
}