const React = require('react');
const Layout = require('./Layout');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ allProducts}) {
  console.log(allProducts)
  return (

    <div className="products-container">
      {allProducts.map((product) => (
        <ProductPage
          product={product}
          courierProduct={courierProduct}
          user={user}
          key={product.id}
        />
      ))}
    </div>
  
  );
};
