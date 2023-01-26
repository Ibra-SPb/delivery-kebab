module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Products", [
      {
        image:
          "https://e3.edimdoma.ru/data/recipes/0014/9584/149584-ed4_wide.jpg?1651046802",
        title: "Шашлык",
        price: 600,
        discountPrice: 20,
        status: "Pending",
        address: "санкт петербург, кременчужская 17, кв 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
