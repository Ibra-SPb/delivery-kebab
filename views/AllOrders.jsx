/* eslint-disable react/prop-types */
const React = require('react');
const OrderPage = require('./OrderPage');

module.exports = function AllOrders({ user, allOrders, manyProducts }) {
  return (
    <div className="orders-container">
      {allOrders.map((order) => (
        <OrderPage
          manyProducts={manyProducts}
          order={order}
          user={user}
          key={order.id}
        />
      ))}
    </div>
  );
};
