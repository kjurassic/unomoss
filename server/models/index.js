// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const User = require('./user');
const PlantInfo = require('./plantInfo');
const UserPlants = require('./userPlants');

const env = process.env.NODE_ENV || 'development';
const db = {};

// Janes link
// postgres://gpgezhvl:QiSf5ksmzLBek_n1Xc9IXHQ5YFLb--lM@rajje.db.elephantsql.com:5432/gpgezhvl

const sequelize = new Sequelize(
  'postgres://fpfuvlhy:aPnntoKTJRIYovdV0AQ3w4vj9BVh2AzG@suleiman.db.elephantsql.com:5432/fpfuvlhy'
);

// const sequelize = new Sequelize('test', 'admin', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

sequelize
  .authenticate()
  .then((res) => {
    console.log('Running database...');
  })
  .catch((err) =>
    console.log('This is the error from sequelize authentication', err)
  );

db.User = User(sequelize, DataTypes);
db.PlantInfo = PlantInfo(sequelize, DataTypes);
db.UserPlants = UserPlants(sequelize, DataTypes);

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
