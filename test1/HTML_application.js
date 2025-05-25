// Отримання даних з форми
let input = document.forms['myForm'].input
// Приєднання к елементам, які вже вбудовані в HTML_application.html
let inputButton = document.getElementById('inputButton')
let monitor = document.getElementById('monitor');
let errorMessage = document.getElementById('error-message');
// Створення масиву
let arrTest = []
// Створення поведінки для input, та видалення помилки після її виникнення з поля
input.addEventListener('input', function () {
    input.classList.remove('input-error');
    errorMessage.textContent = '';
});
// Створення поведінки для кнопки Add
inputButton.addEventListener("click", function (event) {
    event.preventDefault();
    let text = input.value;
    // Створення умов для введення символів user
    let match = text.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/);
    // Якщо перевірка пройдена, то виконується цей блок
    if (match) {
        // Запись даних з input у тимчасовий масив
        let oneArr = {
            name: match[1],
            value: match[2],
        };
        // Добавлення даних з тимчасового масиву у основний, на початок
        arrTest.unshift(oneArr);
        monitor.innerText = '';
        // Ітерація масиву для виведення інформації у додаток для user
        for (let el of arrTest) {
            let p = document.createElement('p');
            p.textContent = `${el.name}=${el.value}`;
            monitor.appendChild(p);
        }
        // Видалення введених даних user з поля input
        input.value = '';
        // Видалення помилки після її виникнення, з поля додатка
        input.classList.remove('input-error');
        errorMessage.textContent = '';
    } else {
        // Виведення помилки у додаток, для інформування user
        input.classList.add('input-error');
        errorMessage.textContent = 'ERROR!!! Incorrect input';
    }
})
// Створення поведінки для кнопки Sort by name
let button1 = document.getElementById('button1');
button1.addEventListener("click", function (event) {
    event.preventDefault();
    /// Приєднання к елементам, які вже вбудовані в HTML_application.html
    let button1p = document.createElement('p');
    button1p.id = 'button1p';
    // Сортування елементів масиву по name
    let sort = arrTest.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })
    // Видалення попередніх даних з додатка
    monitor.innerText = '';
    monitor.append(button1p);
    // Ітерація масиву для виведення інформації у додаток для user
    for (let el of sort) {
        let button1p = document.createElement('p');
        button1p.textContent = `${el.name}=${el.value}`;
        monitor.appendChild(button1p);
    }
})
// Створення поведінки для кнопки Sort by value
let button2 = document.getElementById('button2');
button2.addEventListener("click", function (event) {
    event.preventDefault();
    /// Створення тегу р в HTML_application.html
    let button2p = document.createElement('p');
    button2p.id = 'button2p';
    // Сортування елементів масиву по value
    let sort = arrTest.sort(function (a, b) {
        return a.value.localeCompare(b.value);
    })
    // Видалення попередніх даних з додатка
    monitor.innerText = '';
    monitor.append(button2p);
    // Ітерація масиву для виведення інформації у додаток для user
    for (let el of sort) {
        let button2p = document.createElement('p');
        button2p.innerText = `${el.name}=${el.value}`;
        monitor.append(button2p);
    }
})
// Створення поведінки для кнопки Delete, яка видаляє всі дані з додатка
let button3 = document.getElementById('button3');
button3.addEventListener("click", function (event) {
    monitor.innerText = '';

})