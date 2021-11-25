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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "Link must have an user id"},
        notEmpty: {msg: "User Id must not be empty."},
        isInt: {msg: "User id must be an integer"} // TODO; instead of user id, change to use UUID
      }  
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
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
    validate: {
      classicLinkTitleNotEmpty() {
        if(this.type === "classic_link" && (this.title === null || this.title === undefined)) {
          throw new Error('Classic Link must have a title, and title must not be empty');
        }
      },
      classicLinkTitleLimit() {
        if(this.type === "classic_link" && this.title && this.title.length > 144) {
          throw new Error('Classic Link title must be fewer than 144 characters.');
        }
      }
    } 
  });
  return Link;
};