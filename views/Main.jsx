const React = require("react");
const Layout = require("./Layout");

module.exports = function HomePage({ title, name }) {
  return name ? (
    <Layout title={title} name={name}>
        <h1>Main page</h1>
    </Layout>
) : (
    <Layout title={title} name={name}>
        <h1>Main page</h1>
    </Layout>
)
};
