const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Navbar() {
  return (
    <header>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="/">
            Деливери Кебаб
          </a>
        </nav>
      </div>
    </header>
  );
};
