module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Orders", [
      {
        userId: 2,
        productId: 1,
        address: "пр. Чернышевского, 17, Санкт-Петербург, 191123",
        status: "create",
        discount: 30,
        phone: "89148512301",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 1,
        address: "пр. Чернышевского, 17, Санкт-Петербург, 191123",
        status: "ordered",
        discount: 30,
        phone: "89148503301",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 1,
        address: "пр. Чернышевского, 17, Санкт-Петербург, 191123",
        status: "closed",
        discount: 30,
        phone: "89148503301",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
