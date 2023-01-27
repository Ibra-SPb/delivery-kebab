const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=a1436f95-2454-4c6f-8c2e-740f560c4e54&lang=ru_RU"
          type="text/javascript"
        />
        <title>{title}</title>
        <link rel="icon" href="images/favicon/favicon.ico" type="image/ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
        <link href="/css/style.css" rel="stylesheet" />
        <script src="/script/client.js" defer />
      </head>
      <body>
        <Navbar user={user} />
        <div>{children}</div>
      </body>
    </html>
  );
};
