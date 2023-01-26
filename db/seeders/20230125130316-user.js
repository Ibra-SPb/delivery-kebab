const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Vanya",
        email: "123@123.ru",
        phone: "89148503301",
        password: await bcrypt.hash("123456", 10),
        role: "клиент",
        address: "санкт петербург, кирочная 19, кв 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vasya",
        email: "12423@11223.ru",
        phone: "89148512301",
        password: await bcrypt.hash("123456", 10),
        role: "курьер",
        address: "санкт петербург, кременчужская 17, кв 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
