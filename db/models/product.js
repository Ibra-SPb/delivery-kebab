'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({User}) {
      this.hasMany(User, {
        foreignKey: "productId",
      });
    }
  }
  Products.init({
    image: {type:DataTypes.TEXT,allowNull:false},
    title: {type:DataTypes.TEXT,allowNull:false},
    price: {type:DataTypes.INTEGER,allowNull:false},
    discontPrice: {type:DataTypes.INTEGER,allowNull:false},
    status: {DataTypes.TEXT},
    adress: {type:DataTypes.TEXT,allowNull:false},
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};