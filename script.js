
// 1. Напиши код, который изменит document.title на "Учимся работать с DOM".
const tetleEll = document.innerText= 'Учимся работать с DOM'
// 2. Создай строку с HTML - разметкой и вставь её в document.body с помощьюinnerHTML.Объясни, почемуinnerHTML может быть небезопасным.
const pEll = document.createElement('p')
document.body.append(pEll)
// 3. Используяwindow.navigator, получи и выведи в консоль:
console.log(window.navigator.userAgent)
// - Название браузера
//   - Версию браузера
console.log(`Браузер: ${browser.name} Версия: ${browser.version}`);
//     - Операционную систему пользователя
// 4. Выведи в консоль текущий URL страницы, используяwindow.location.href.
// 5. Создай ссылку вdocument.body, которая перенаправляет пользователя на "https://example.com"
const currentUrl = window.location='"https://example.com"';
console.log(currentUrl);

// ---

// 1. Найди элемент с id="header" и выведи его текстовое содержимое.
const idHeader = document.querySelector('#header')
console.log('текстовое содержимое.' + idHeader);

// 2. Выведи в консоль список всех элементов с классом "item" 
const itemEll = document.querySelectorAll('.item')
// 3. Найди все<p> - теги на странице и измени их текст на "Новый текст" 
const pEl = document.querySelectorAll('p')
document.innerText='Новый текст'
// 4. Найди первый элемент с классом "active" и добавь емуbackground-color: yellow.
const active = document.querySelector('.active')
active.style.backgroundColor='yellow'
// 5. Найди все <li> внутри <ul> и добавь к каждому атрибут data-index с его порядковым номером.
const ulEll=document.querySelector('ul')
ulEll.classList.add('list')
const list = document.querySelector('.list')
listLi=list.querySelector('li')

// ---

// 1. Создай новый <div> сclass="new-box", добавь в него текст "Привет, мир!" и вставь в document.body

const divEll = document.createElement('div')
divEll.classList.add('new-box')
divEll.innerText = 'Привет, мир!'
document.body.append(divEll)
// 2. Создай<p> - элемент с текстом "Этот абзац добавлен первым!" и добавь его в document.body 

const pEllem = document.createElement('p')
pEllem.innerText= 'Этот абзац добавлен первым!'
document.body.append(pEllem)
// 3. Создай список <ul> и добавь в него 5 <li> с текстом"Элемент 1", "Элемент 2" и т.д.
const ulEl = document.createElement('ul')
if(let i = 0; i<5; i++){
const liEl = document.createElement('li')
document.append(ulEl)
}

// 4. Замени существующий элемент с id="old" на новый <h2> с текстом "Заголовок заменён" с помощьюreplaceChild().
const old = document.querySelector('#old')
const h2EL = document.createElement('h2')
h2EL.innerText='Заголовок заменён'
old.replaceChild('h2')

// 5. Удали из document.body первый<p> - элемент, используяremoveChild().
const delet = document.querySelector('p')
delet.removeChild()
// 6. ИспользуяinnerHTML, добавь вdocument.body <section><h2>Раздел</h2><p>Текст 



// внутри раздела</p></section>.Объясни, чем этот способ отличается отcreateElement.

// ---

// 1. Найди элемент с id="box" и измени его цвет фона на blue черезstyle.backgroundColor.
// 2. Создай новый элемент <div> с текстом "Этот блок скрыт" и добавь ему класс "hidden" через classList.
// 3. Найди элемент с классом "menu" и удали у него класс"active", если он есть.
// 4. Найди элемент с id="toggle-btn" и переключи у него класс "highlight" с помощьюclassList.toggle().
// 5. Проверь, есть ли у элемента с id="card" класс"selected", и выведи true или false в консоль.



// ---

//  1. Добавление списка в DOM 
// const names = ["Алиса", "Боб", "Чарли", "Дэйв", "Эмма"];
// Создай <ul> и добавь в него<li> - элементы с именами из массива, используя document.createElement и appendChild.


//  2. Генерация карточек товаров 
//  Дан массив объектов с товарами:
// const products = [
//   { name: "Ноутбук", price: 50000 },
//   { name: "Смартфон", price: 30000 },
//   { name: "Планшет", price: 20000 }
// ];
// Создай <div class="products"> и добавь в него карточки товаров в виде:
// <div class="product">
//   <h2>Ноутбук</h2>
//   <p>Цена: 50000</p>
// </div>


// 3. Таблица из массива объектов 
// Дан массив данных о пользователях:
// const users = [
//   { id: 1, name: "Иван", age: 25 },
//   { id: 2, name: "Мария", age: 30 },
//   { id: 3, name: "Андрей", age: 28 }
// ];

// Создай таблицу <table>, в которой будут заголовки  ID, Имя, Возраст, и строки с данными пользователей.

// 4. Галерея изображений 
// Дан массив ссылок на изображения:
// const images = [
//   "image1.jpg",
//   "image2.jpg",
//   "image3.jpg"
// ];

// Создай < div class="gallery">, добавь в него < img > - элементы с src из массива.

// 5. Отображение списка задач 
// Дан массив задач:
// const tasks = [
//   { text: "Сделать зарядку", completed: false },
//   { text: "Выучить JavaScript", completed: true },
//   { text: "Прочитать книгу", completed: false }
// ];
// Создай <ul class="todo-list">, добавь в него <li> с текстом задачи.
// Если completed: true, добавь класс"done", чтобы стилизовать выполненные задачи.

// 6. Добавление комментариев 
// Дан массив комментариев:
// const comments = [
//   { author: "Алиса", text: "Отличная статья!" },
//   { author: "Боб", text: "Спасибо за информацию." },
//   { author: "Чарли", text: "Очень полезно!" }
// ];

// Создай <div class="comments"> и добавь в него комментарии в виде:
// <div class="comment" >
//   <strong>Алиса</strong>
//   <p>Отличная статья!</p>
// </>


// 7. Создание списка ссылок 
// Дан массив ссылок:
// const links = [
//   { text: "Google", url: "https://google.com" },
//   { text: "YouTube", url: "https://youtube.com" },
//   { text: "GitHub", url: "https://github.com" }
// ];

// Создай <nav> и добавь в него <a> - ссылки с текстом и href из массива.
