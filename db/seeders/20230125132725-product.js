module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Products", [
      {
        image:
          "https://e3.edimdoma.ru/data/recipes/0014/9584/149584-ed4_wide.jpg?1651046802",
        title: "Шашлычок, ВАй какой вкусный",
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://recfood.ru/wp-content/uploads/2018/10/plov-10-1-800x445.jpg",
        title: "Плов, мамой клянусь вкусный",
        price: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image:
          "https://img-global.cpcdn.com/recipes/19ad9fa8e1036525/1280x1280sq70/photo.webp",
        title: "Шаурма, с бодуна",
        price: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://www.gastronom.ru/binfiles/images/20171130/b6b87fe5.jpg",
        title: "Шаверма, для любителя парадных",
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://i.ytimg.com/vi/tMkE_VuPm9U/maxresdefault.jpg",
        title: "Хашикб не путать с хешиком",
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://i.otzovik.com/2013/12/18/681516/img/73216925_b.jpg",
        title: "Пельмесики с кетчунезом",
        price: 1000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
