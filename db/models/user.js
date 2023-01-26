const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Product }) {
      this.hasMany(Product, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      name: { type: DataTypes.TEXT, allowNull: false },
      email: { type: DataTypes.TEXT, unique: true, allowNull: false },
      phone: { type: DataTypes.TEXT, unique: true, allowNull: false },
      password: { type: DataTypes.TEXT, allowNull: false },
      role: { type: DataTypes.TEXT },
      address: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
