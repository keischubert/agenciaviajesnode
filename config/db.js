import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
    // host: process.env.DB_HOST,
    // port: '3306',
    // dialect: 'mysql', //para indicarle que se trabajara con mysql ya que sequelize tb soporta postgres.
    define: {
        timestamps: false //para que no cree por default columnas sobre cuando fue creado, etc.
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;