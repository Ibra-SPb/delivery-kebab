/* eslint-disable react/prop-types */
const React = require('react');
const AllOrdersPage = require('./AllOrdersPage');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ orders, user, allOrders }) {
  return (
    <div>
      <div className="products-container">
        {orders.map((order) => (
          <div>
            <h3>Ваши заказы: </h3>
            <div>
              <ProductPage order={order} user={user} key={order.id} />
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div>
        <h3>Доступные заказы</h3>
        {allOrders.map((order) => (
          <div>
            <AllOrdersPage order={order} user={user} key={order.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
