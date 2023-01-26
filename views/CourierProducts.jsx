const React = require('react');

module.exports = function CourierProducts({product, user}) {
  return (
    <div id={product.id}>
      <img src={product.image} alt="product_pic" />
      <span>{product.title}</span>
      <p>{product.price}</p>
      <p>{product.discountPrice}</p>
      <p>{product.status}</p>
      <address>{product.address}</address>
      <button className='change-button'>Изменить</button>
    </div>
  );
};
x
