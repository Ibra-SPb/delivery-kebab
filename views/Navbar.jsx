/* eslint-disable react/prop-types */
const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div>
        <a className="navbar-brand" href="/">
          Деливери Кебаб
        </a>
        {!user ? (
          <>
            <a href="/reg">Зарегистрироваться</a>
            <a href="/auth">Войти</a>
          </>
        ) : (
          <>
            <a>
              Привет,
              {user.name}
              !
            </a>
            <a href="/logout">Выйти</a>
          </>
        )}
      </div>
    </nav>
  );
};
