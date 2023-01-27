const React = require('react');

module.exports = function Courier({
  title, user, products, orders
}) {
  return (
        <div className='container'>
          <h1>Здравствуй, {user.name}! Твои заказы</h1>
        <div className='container-courier'>
        <div className = 'forma'>
        <form className='addForm' action='/' method='post'>
          <label>Добавь кебаб:<select name='title'>
            {products.map((product) => (
              <option>{product.title}</option>
            ))} 
          </select></label>
          <label><input name='address' placeholder='Где вы находитесь' type='text'></input></label>
          <label><input name='discount' placeholder='Укажите процент скидки' type='number'></input></label>
          <button type='submit'>Добавить</button>
        </form>
        </div>
        <div clasName='order'>
          {
          orders.filter((order) => order.userId === user.id).map((order) => (
             <div >
              {console.log(order)}
              {/* <div className='ord'>
              <div><p>{order.product.title}</p></div>
              <div className='orderImg'><img src={order.product.image} alt="product_pic" /></div>
              <div><p>Цена: {order.product.price}</p></div>
              <div><p>Процент скидки: {order.discount}%</p></div>
              <div className= 'total'><p>Новая цена: {(order.product.price)*(order.discount)/100}</p></div>
              <div><p>Адрес: {order.address}</p></div>
              <a href="#" class="btn btn-primary">Выполнить заказ</a>
              </div> */}

               <div className='ord'>
                <div><p>Новый заказ</p></div>
                <div><p>{order.id}. {order.product.title}</p></div>
              <div><p>Имя: {order.user.name}</p></div>
              <div><p>Email: {order.user.email}</p></div>
              <div><p>Телефон: {order.user.phone}</p></div>
              <div><p>Адрес: {order.user.address}</p></div>
              <a href="#" class="btn btn-primary">Выполнить заказ</a>
              </div> 
            </div>
          ))}
        </div>
        </div>
        </div>
      )}

       
{/* <div className="card">
              <img className="card-img-top" src={order.product.image} alt="Card image cap" />
              <div className="card-body">
              <h5 className="card-title">{order.product.title}</h5>
              <p className="card-text">Цена: {order.product.price}</p>
              <p className="card-text">Процент скидки: {order.discount}%</p>
              <p className="card-text">Новая цена: {(order.product.price)*(order.discount)/100}</p>
              <a href="#" class="btn btn-primary">Выполнить заказ</a>
              </div>
            </div> */}