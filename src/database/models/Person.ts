import { DataTypes, Model } from 'sequelize';
import sequelize from '../datasource';

export class Person extends Model {
}

Person.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isHired: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Person',
  tableName: 'People',
  timestamps: true
});
