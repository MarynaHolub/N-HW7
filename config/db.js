// db.js - исп. для настройки и подключения Sequelize к нашей БД

import { Sequelize } from 'sequelize';
import configData from './config.js'; // параметры подключения к БД для сред разработки (development, test, prodaction)
import 'dotenv/config';

const env = process.env.NODE_ENV || 'development'; // определяем текущее окружение

const config = configData[env];

// Создаем экземпляр Sequelize, то есть экземпляр подключения к БД
// пул подключений
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false, // не печатать каждый SQL-запрос в консоль автоматически
  },
);

export default sequelize;
