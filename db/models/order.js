"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User);
      this.belongsTo(Product);
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
