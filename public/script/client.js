// registration
const one = document.querySelector('#tryApi')
const two = document.querySelector('#Goo')
const regForm = document.querySelector('.regForm');
const logForm = document.querySelector('.logForm');
const orderNew = document.querySelector(`.Tableee`)
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, phone, role, address, password, action, method,
    } = e.target;
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

    });
    const data = await res.json();
    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      //   errorBlock.style.visibility = 'visible';
    } else {
      window.location.replace('http://localhost:3000');
    }
  });
}

// auth


if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      email, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),

    });
    const data = await res.json();
    console.log(data)
    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
    } else {
      window.location.replace('http://localhost:3000')
    }
  });
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

let from;
let to;
// ymaps.ready(init);
// ymaps.ready(init);
function init() {
  // Стоимость за километр.
  // const DELIVERY_TARIFF = 20;
  // Минимальная стоимость.
  // const MINIMUM_COST = 500;
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

    from,
    to,
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
        // const price = calculate(Math.round(length.value / 1000));
        // Создадим макет содержимого балуна маршрута.
        const balloonContentLayout = ymaps.templateLayoutFactory.createClass(
          `<span>Расстояние: ${length.text}.</span><br/>`
        );
        // Зададим этот макет для содержимого балуна.
        route.options.set('routeBalloonContentLayout', balloonContentLayout);
        // Откроем балун.
        activeRoute.balloon.open();
      }
    });
  });
  // Функция, вычисляющая стоимость доставки.
  // function calculate(routeLength) {
  //   zaebal = Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
  //   console.log(zaebal);
  //   return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
  // }
}


//addOrder
const addOrder = document.querySelector('.addForm')
if (addOrder) {
  addOrder.addEventListener('submit', async (e) => {
    e.preventDefault()
    const { title, address, discount, method, action } = e.target
    console.log(title.value, address.value, discount.value, method, action)
    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        address: address.value,
        discount: discount.value,
      })
    })
    const data = await res.json()
    // console.log(data.message)
    if (data.status) {
      const status = document.querySelector('.status');
      console.log(status)
      status.innerHTML = data.message;
    }
  })
}

// closedOrder
const closeOrder = document.querySelector(`.order`)
if (closeOrder) {
  closeOrder.addEventListener('click', async (e) => {
    e.preventDefault()
    const res = await fetch(`/${e.target.dataset.id}`, {
      method: 'put',
    })
    const data = await res.json()
    console.log(data)
    if (data.message) {
      e.target.closest('.ord').remove()
    }
  })
}


console.log(orderNew)
if (orderNew) {
  orderNew.addEventListener('click', async (e) => {
    e.preventDefault()
    const res = await fetch(`/${e.target.dataset.id}`, {
      method: 'put',
    })
    const data = await res.json()
    console.log(data)
    if (data.message) {
      e.target.closest('.vkusno').remove()
    }
  })
}

// id="tryApi"

one.addEventListener('change', (event) => {
  ymaps.ready(init);
  from = event.target.value;
  console.log(event.target.value);
});
two.addEventListener('change', (event) => {
  to = event.target.value;
  ymaps.ready(init);
  console.log(event.target.value);
});

