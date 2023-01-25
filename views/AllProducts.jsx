const React = require('react');
const ProductPage = require('./ProductPage');

module.exports = function Allproducts({ allProducts,  courierProduct, user }) {
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
