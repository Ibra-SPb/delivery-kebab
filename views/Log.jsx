const React = require('react');
const Layout = require('./Layout');

function Log({title}) {
    return (
        <Layout title={title}>
            <div className='forma'>
                <div><h1>Авторизация</h1></div>
                <div>
                    <form className='logForm' action='/auth' method='post'>
                    {/* <label>Логин:<input name="login" type="text" placeholder="Введите ваш логин" /></label> */}
                    <label>E-mail:<input name="email" type="email" placeholder="example@site.ru" /></label>
                    <label>Пароль:<input name="password" type="password" minLength="5" placeholder="Пароль"/></label>
                    <button type="submit">Войти</button>
                    </form>
                </div>
                <div className="errorBlock"></div>
            </div>
        </Layout>
    )
}

module.exports = Log;