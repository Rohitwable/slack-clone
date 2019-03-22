
import Sequelize from 'sequelize'
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {
    
}
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
