
const React = require('react');
const Layout = require('./Layout');

const React = require('react');
const Layout = require('./Layout');
const AllProducts = require('./AllProducts');


module.exports = function Main({
  title, allProducts, user, courier,
}) {
  return (
    <div>
      <Layout title={title}>
        <div>
          <AllProducts
            user={user}
            courier={courier}
            allProducts={allProducts}
          />
        </div>
      </Layout>
    </div>
  );
};
