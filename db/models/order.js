const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Product }) {
      Order.User = Order.belongsTo(User, { foreignKey: 'userId' });
      Order.Product = Order.belongsTo(Product, {
        foreignKey: 'productId',
        as: 'product',
        attributes: ['image', 'title', 'price']
      });
    }

    static listWithProduct(userId) {
      return Order.findAll({
        where: { userId },
        order: [['createdAt', 'DESC']],
        include: [Order.Product],
      });
    }

    static listWithOrders(status) {
      return Order.findAll({
        where: { status },
        order: [['createdAt', 'DESC']],
        include: [Order.Product],
      });
    }
  }

  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
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
      modelName: 'Order',
    },
  );
  return Order;
};
