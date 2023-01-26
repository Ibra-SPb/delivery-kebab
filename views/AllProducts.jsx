const React = require('react');
const Layout = require('./Layout');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ products, orders}) {

  return (

    <div className="products-container">
      {products.map((product) => (
        <ProductPage
          product={product}
          // courierProduct={courierProduct}
          // user={user}
          // key={product.id}
        />
      ))}
    </div>
  
  );
};
