'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.Person = void 0;
const sequelize_1 = require('sequelize');
const db_1 = __importDefault(require('../datasource'));
class Person extends sequelize_1.Model {
}
exports.Person = Person;
Person.init({
  id: {
    type: sequelize_1.DataTypes.UUID,
    defaultValue: sequelize_1.DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: sequelize_1.DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: sequelize_1.DataTypes.INTEGER,
    allowNull: false
  },
  isHired: {
    type: sequelize_1.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  sequelize: db_1.default,
  modelName: 'Person',
  tableName: 'People',
  timestamps: true
});
