const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate({ Order }) {
      this.hasMany(Order, {
        foreignKey: "productId",
      });

    }
  }
  Product.init(
    {
      image: { type: DataTypes.TEXT, allowNull: false },
      title: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};