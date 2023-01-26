const React = require('react');
const Layout = require('./Layout');
const AllProducts = require('./AllProducts');


module.exports = function Main({
  title, products, user, orders
}) {
  return (
    <div>
      <Layout title={title} user={user}>
        <div>
          {/* {orders.map((order) => <span key={order.id}>{order.product.title}</span>)} */}
          <AllProducts
            user={user}
             products={products}
             orders={orders}
          />
        </div>
      </Layout>
    </div>
  );
};
