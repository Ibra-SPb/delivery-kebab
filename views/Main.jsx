const React = require("react");
const Layout = require("./Layout");

module.exports = function HomePage({ title }) {
  return (
    <div>
      <Layout title={title}></Layout>
    </div>
  );
};
