/* eslint-disable react/prop-types */
const React = require("react");

module.exports = function ProductPage({ order, user }) {
  return (
    <div id={order.product.id} className="vkusno">
      <br />
      <img
        style={{ width: "300px", borderRadius: "10px" }}
        src={order.product.image}
        alt="product_pic"
      />
      <br />
      <span>{order.product.title}</span>
      <div className="articles">
        Старая цена:
        <p>{order.product.price} руб.</p>
      </div>
      <div className="articles">
        Новая цена:
        <p>
          {order.product.price - (order.discount / 100) * order.product.price}{" "}
          руб.
        </p>
      </div>
      <address className="articles">
        Местоположение: <br /> {order.address}
      </address>
      {user && user.role === "customer" && (
        <button className="buy-button" type="button" data-id={order.id}>
          Выкупить
        </button>
      )}
      <br />
    </div>
  );
};
