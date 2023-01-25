const React = require('react');
const Layout = require('./Layout');

function Reg({title}) {
    return(
        <Layout title={title}>
            <div>
                <div>
                <h1>Регистрация</h1>
                <form className='regForm' action='/reg' method='post'>
                    <label>Имя:<input name="name" type="text" placeholder="Введите имя" /></label>
                    <label>E-mail:<input name="email" type="email" placeholder="example@site.ru" /></label>
                    <label>Телефон:<input name="phone" type="text" placeholder="Введите номер" /></label>
                    <select name='role'>
                        <option>Курьер</option>
                        <option>Заказчик</option>
                    </select>
                    <label>Адрес:<input name="address" type="text" placeholder="Введите адрес" /></label>
                    <label>Пароль:<input name="password" type="password" minLength="5" placeholder="Придумайте пароль"/></label>
                    <button type="submit">Зарегистрироваться</button>
                </form>
                </div>
                <div className="errorBlock"></div>
            </div>
        </Layout>
    )
}

module.exports = Reg;