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
    static associate({Link}) {
      // define association here
      this.belongsTo(Link, {foreignKey: 'linkId', onDelete: 'CASCADE'})
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
    showTime: DataTypes.DATE,
    soldOut: DataTypes.BOOLEAN,
    onSale: DataTypes.BOOLEAN,
    url: DataTypes.STRING,
    embedPlayerUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ListItem',
    validate: {
      async urlNotEmpty() {
        // music play must have an url
        const linkId = this.linkId;
        const link = await sequelize.models.Link.findOne({where: {id: linkId}});        
        const linkType = link.type;
        if(linkType === 'music_player' && (this.url === null || this.url === undefined)) {
          throw new Error('Music Player must have a platform link.');
        }        
      },
      async showTimeNotEmpty() {
        // check shows_list has a future show time
        const linkId = this.linkId;
        const link = await sequelize.models.Link.findOne({where: {id: linkId}});        
        const linkType = link.type;
        if(linkType === 'shows_list' && (this.showTime === null || this.showTime === undefined || this.showTime <= new Date())) {
          throw new Error('Shows list must have ha a futre show time.');
        }       
      },
      async showLocationNotEmpty() {
        // check shows_list has a location
        const linkId = this.linkId;
        const link = await sequelize.models.Link.findOne({where: {id: linkId}});        
        const linkType = link.type;
        if(linkType === 'shows_list' && (this.location === null || this.location === undefined)) {
          throw new Error('Shows list must have ha a location.');
        }        
      }
    }
  });
  return ListItem;
};