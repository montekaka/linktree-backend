'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ListItem.init({
    linkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "List item must have a link id"},
        notEmpty: {msg: "Link Id must not be empty."},
        isInt: {msg: "Link id must be an integer"} // TODO; instead of user id, change to use UUID
      }        
    },
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    show_time: DataTypes.DATE,
    sold_out: DataTypes.BOOLEAN,
    on_sale: DataTypes.BOOLEAN,
    url: DataTypes.STRING,
    embed_player_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ListItem',
  });
  return ListItem;
};