
//registration
const regForm = document.querySelector('.regForm')
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const { name, email, phone, role, address, password, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        role: role.value,
        address: address.value,
        password: password.value,
      }),
    })
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      //   errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/');
    }
  })
}

//auth
const logForm = document.querySelector('.logForm')
if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    const data = await res.json();
    console.log(data)
    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock')
      errorBlock.innerHTML = data.message;
    } else {
      window.location.assign('/')
    }
  })
}




/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// ymaps.ready(init);
// function init() {
//   const myMap = new ymaps.Map('map', {
//     center: [55.76, 37.64],
//     zoom: 7,
//   });
// }
let zaebal;
ymaps.ready(init);
function init() {
  // Стоимость за километр.
  const DELIVERY_TARIFF = 20;
  // Минимальная стоимость.
  const MINIMUM_COST = 500;
  const myMap = new ymaps.Map('map', {
    center: [60.906882, 30.067233],
    zoom: 9,
    controls: [],
  });
  // Создадим панель маршрутизации.
  const routePanelControl = new ymaps.control.RoutePanel({
    options: {
      // Добавим заголовок панели.
      showHeader: true,
      title: 'Расчёт доставки',
    },
  });
  const zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: 'small',
      float: 'none',
      position: {
        bottom: 145,
        right: 10,
      },
    },
  });
  // Пользователь сможет построить только автомобильный маршрут.
  routePanelControl.routePanel.options.set({
    types: { auto: true },
  });

  // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
  routePanelControl.routePanel.state.set({
    fromEnabled: false,
    from: 'Москва'
  });

  myMap.controls.add(routePanelControl).add(zoomControl);

  // Получим ссылку на маршрут.
  routePanelControl.routePanel.getRouteAsync().then((route) => {
    // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
    route.model.setParams({ results: 1 }, true);

    // Повесим обработчик на событие построения маршрута.
    route.model.events.add('requestsuccess', () => {
      const activeRoute = route.getActiveRoute();
      if (activeRoute) {
        // Получим протяженность маршрута.
        const length = route.getActiveRoute().properties.get('distance');
        // Вычислим стоимость доставки.
        const price = calculate(Math.round(length.value / 1000));
        // Создадим макет содержимого балуна маршрута.
        const balloonContentLayout = ymaps.templateLayoutFactory.createClass(
          `<span>Расстояние: ${length.text}.</span><br/>` +
          `<span style="font-weight: bold; font-style: italic">Стоимость доставки: ${price} р.</span>`
        );
        // Зададим этот макет для содержимого балуна.
        route.options.set('routeBalloonContentLayout', balloonContentLayout);
        // Откроем балун.
        activeRoute.balloon.open();
      }
    });
  });
  // Функция, вычисляющая стоимость доставки.
  function calculate(routeLength) {
    zaebal = Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    console.log(zaebal);
    return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
  }
  //   const huy = document.querySelector('#id_167466149346774689320');
}

//addOrder
const addOrder = document.querySelector('.addForm')
if (addOrder) {
  addOrder.addEventListener('submit', async (e) => {
    e.preventDefault()
  })
}
