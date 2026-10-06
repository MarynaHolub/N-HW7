import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const App = sequelize.define(
  'App',
  {
    id: {
      type: DataTypes.INTEGER, // только целые числа
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true, // Поле обязательно для заполнения
    },
    size: {
      type: DataTypes.FLOAT, // могут быть дробные
      allowNull: true,
    },
  },
  {
    tableName: 'apps',
    timestamps: false, //   чтобы не создавались автоматическое добавление полей `createdAt` и `updatedAt`
  },
);

export default App;
