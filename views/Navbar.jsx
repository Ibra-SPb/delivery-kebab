/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Navbar({ user }) {
  return (
    <header>
      {!user ? (
        <div className="navbar">
          <div className="logo">
            <div className="img-logo">
              <img src="https://play-lh.googleusercontent.com/m6-gFunvj7aQD5fdv8EdJZBN5M4REIobTaPZPYS0K5Td7CNYnazN7fOKiPwwaY3hJw" />
            </div>
            <div>
              <a className="navbar-brand" href="/">
                Деливери Кебаб
              </a>
            </div>
          </div>
          <div className="auth">
            <div>
              <a className="navbar-brand" href="/reg">
                Зарегистрироваться
              </a>
            </div>
            <div>
              <a className="navbar-brand" href="/auth">
                Войти
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="logo">
            <div>
              <a className="navbar-brand" href="/">
                Деливери Кебаб
              </a>
            </div>
          </div>
          <div className="auth">
            <div>
              <a className="navbar-brand">
                Привет,
                {' '}
                {user.name}
                !
              </a>
            </div>
            <div>
              <a className="navbar-brand" href="/logout">
                Выйти
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
