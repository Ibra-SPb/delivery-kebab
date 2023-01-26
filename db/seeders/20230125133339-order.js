module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
