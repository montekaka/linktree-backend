'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'})
    }
  };
  Link.init({
    userId: DataTypes.INTEGER,
    type: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Link must have a type"},
        notEmpty: {msg: "Type must not be empty."}        
      }       
    },
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Link',  
  });
  return Link;
};