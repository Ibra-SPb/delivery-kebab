/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const AllOrders = require('./AllOrders');

module.exports = function Main({ title, allOrders, manyProducts, user }) {
  return (
    <Layout title={title} user={user}>
      {user && user.role === 'customer' ? (
        <div>
          <AllOrders
            user={user}
            allOrders={allOrders}
            manyProducts={manyProducts}
          />
        </div>
      ) : (
        <div>
          <AllOrders
            user={user}
            allOrders={allOrders}
            manyProducts={manyProducts}
          />
        </div>
      )}
    </Layout>
  );
};
