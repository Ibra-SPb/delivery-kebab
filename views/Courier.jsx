const React = require('react');
const Layout = require('./Layout');


module.exports = function Main({
  title, user, products, orders
}) {
  return (
    <Layout title={title} user={user}>
      {(user && user.role === 'courier') && (
        <div>
        <h1>Здравствуйте, {user.name}</h1>
        <div>
        <form>
          <select name='title'>
            {products.map((product) => (
              <option>{product.title}</option>
            ))} 
          </select>
          <input name='address' placeholder='Где вы находитесь' type='text'></input>
          <input name='discount' placeholder='Укажите процент скидки' type='number'></input>
          <button type='submit'>Добавить</button>
        </form>
        </div>
        <div>
          {
          orders.filter((order) => order.userId === user.id).map((order) => (
            <div className="orderCard">
                <div className="orderContainer">
                    {{const product = products.filter()}}
                <h3>{}</h3>
                <img style={{ width: '250px' }} src={.img} alt="car" />
                <h6>{car.year}</h6>
                <p>{car.description}</p>
                {   (user &&  user.id === car.user_id ) &&  <button type='button' className='prodano' data-id={car.id}>продал</button>}
                </div>
            </div>
          ))}
        </div>
        </div>
      )}
    </Layout>
  )
};