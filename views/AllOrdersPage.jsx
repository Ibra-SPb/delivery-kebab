/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function ProductPage({ order, user }) {
  return (
    <div id={order.product.id}>
      <img src={order.product.image} alt="product_pic" />
      <span>{order.product.title}</span>
      <p>{order.product.price}</p>
      <p>{order.discount}</p>
      <address>{order.address}</address>
      {user && user.role === 'customer' && (
        <button className="buy-button" type="button">
          Выкупить
        </button>
      )}
    </div>
  );
};
