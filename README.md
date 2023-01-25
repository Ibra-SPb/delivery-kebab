# delivery-kebab

# Дели-вери кебаб

## Звонок от заказчика

[Слушать звонок](https://drive.google.com/file/d/1m5De2kEBqZfhxLVg4PRLbqQkra5xhqQv/view?usp=sharing)

<details>
<summary>Транскрипция звонка</summary>
<p>
Хэллоу! Я - Боря. Работаю в "Дели-вери Кебаб".  У меня есть гениальная идея. 
Периодически возникают ситуации, когда заказчик не хочет принимать 
доставку еды. По регламенту мы должны выкинуть эту еду в мусорку.

Но что если нам не придётся переводить продукты! Наверняка вокруг много людей, 
которые с удовольствием бы съели недоставленный бургер за половину цены.

Поэтому я хочу, чтобы вы сделали приложение, в котором доставщик мог бы 
разместить непринятый заказ, а люди рядом смогли бы его выкупить со 
скидкой.

Мой брат сказал, что такое можно сделать за пару часов, вам я дам немного 
больше времени, чтобы всё получилось красиво. Удачи!
</p>
</details>

## Требования

### Главная страница

* Кнопка регистрации
* Кнопка входа
* Список ближайших доступных непринятых заказов
  * Отсортированный по расстоянию
  * Для каждого заказа:
    * Картинка
    * Название
    * Исходная цена
    * Цена со скидкой
    * Кнопка "Выкупить"
      * Доступна только аутентифицированным пользователям
      * При нажатии уходит уведомление курьеру с телефоном и местоположением клиента

### Страница регистрации
  
  * Две роли: курьер и заказчик

### Кабинет курьера

* Форма добавления непринятого заказа
  * Ввод названия
  * Добавление картинки
  * Текущее местоположение
  * Исходная цена
  * Размер скидки в процентах

* Список добавленных заказов
  * Возможность удалить
