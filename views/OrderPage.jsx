/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function OrderPage({ order, user, manyProducts }) {
  console.log(manyProducts);
  return (
    <div id={order.id}>
      <img
        src={manyProducts[0]['Product.image']}
        alt="product_pic"
        style={{ width: '250px', height: '250px' }}
      />
      <span>{manyProducts[0]['Product.title']}</span>
      <p>{manyProducts[0]['Product.price']}</p>
      <address>{order.address}</address>
      <p>{order.discount}</p>
      {user && user.role === 'customer' && (
        <>
          <p>{order.status}</p>
          <p>{order.phone}</p>
          <button className="buy-button" type="button">
            Выкупить
          </button>
        </>
      )}
    </div>
  );
};
