/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const AllOrders = require('./AllOrders');


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
        <div>
          {/* {orders.map((order) => <span key={order.id}>{order.product.title}</span>)} */}
          <AllProducts user={user} products={products} orders={orders} />

        </div>
      )}
    </Layout>
  );
};
