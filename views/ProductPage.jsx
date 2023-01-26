const React = require('react');

module.exports = function ProductPage({ product, user }) {
  return (
    <div id={product.id}>
      <img src={product.image} alt="product_pic" />
      <span>{product.title}</span>
      <p>{product.price}</p>
      <p>{product.discountPrice}</p>
      <p>{product.status}</p>
      <address>{product.address}</address>
      {user && user.id === product.userId && (
        <button className="buy-button">Выкупить</button>
      )}
    </div>
  );
};
