'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Link}) {
      // define association here
      this.hasMany(Link, {foreignKey: 'userId'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        isEmail: {msg: "User must have an valid email"},
        notEmpty: {msg: "Email must not be empty"}
      }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};