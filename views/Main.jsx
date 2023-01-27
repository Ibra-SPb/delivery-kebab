/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const AllOrders = require('./AllOrders');
const AllProducts = require('./AllProducts')
const Courier = require('./Courier')


module.exports = function Main({ title, user, products, orders }) {
  // console.log(user.role);
  return (
    <Layout title={title} user={user}>
      {user && user.role === 'customer' ? (
        <div>
          {/* {orders.map((order) => <span key={order.id}>{order.product.title}</span>)} */}
          <AllProducts user={user} products={products} orders={orders} />
        </div>
      ) : (
        // прорисовка для курьера
        <div>
          {/* {orders.map((order) => <span key={order.id}>{order.product.title}</span>)} */}
          <Courier title={title} user={user} products={products} orders={orders} />
        </div>
      )}
    </Layout>
  );
};
