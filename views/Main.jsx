const React = require('react');
const Layout = require('./Layout');
const AllProducts = require('./AllProducts');


module.exports = function Main({
  title, allProducts, user,
}) {
  return (
    <div>
      <Layout title={title}>
        <div>
          <AllProducts
            user={user}
            allProducts={allProducts}
          />
        </div>
      </Layout>
    </div>
  );
};
