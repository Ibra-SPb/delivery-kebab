/* eslint-disable react/prop-types */
const React = require('react');
const AllOrdersPage = require('./AllOrdersPage');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ orders, user, allOrders }) {
  return (
    <div>
      {!user ? (
        <div className="tablee">
          <h3 className="title">Зарегистрируйтесь, чтобы сделать заказ!</h3>
          <div className="orderTable">
            {orders.map((order) => (
              <AllOrdersPage order={order} key={order.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="Tableee">
          <h3 className="title">Доступные заказы: </h3>
          <div className="products-container orderTable">
            {allOrders.map((order) => (
              <ProductPage order={order} user={user} key={order.id} />
            ))}
          </div>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};
