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
    linkId: DataTypes.INTEGER,
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