
const React = require('react');
const Layout = require('./Layout');
const AllProducts = require('./AllProducts');

module.exports = function Main({
  title, allProducts
}) {
  console.log(allProducts)
  return (
    <div>
      <Layout title={title}>
        <div>
          <AllProducts
            allProducts={allProducts}
          />
        </div>
      </Layout>
    </div>
  );
};
