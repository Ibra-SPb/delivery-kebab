/* eslint-disable react/prop-types */
const React = require('react');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ orders, user }) {
  return (
    <div className="products-container">
      {orders.map((order) => (
        <div>
          <ProductPage order={order} user={user} key={order.id} />
        </div>
      ))}
    </div>
  );
};
