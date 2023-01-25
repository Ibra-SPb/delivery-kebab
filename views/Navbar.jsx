const React = require('react');

// eslint-disable-next-line react/prop-types
module.exports = function Navbar({name}) {
  return (
    <header>
      {!name ? (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="/">Деливери Кебаб</a>
          <a href='/reg' >Зарегистрироваться</a>
          <a href='/auth'>Войти</a>
        </nav> 
      </div>
      ) : (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="/">Деливери Кебаб</a>
          <a>Привет, {name}!</a>
          <a href='/logout' >Выйти</a>
        </nav> 
      </div>
      )}
    </header>
  );
};