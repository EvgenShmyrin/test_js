// Отримання масиву з endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => {
        // створення обгортки divMain для виведення id,name всех user в index.html
        let divMain = document.createElement('div');
        divMain.classList.add('usersDiv');
        // Отримання елементів масиву
        for (let user of users) {
            // Обгортання цих елементів в div для кожного user
            let div = document.createElement('div');
            // Створення тегів а, р та кнопки для дії з користувачем, а також їх назв
            let p = document.createElement('p');
            let button = document.createElement('button');
            // Створення посилання для кнопки кожному user, яка при натисканні на неї переводить на сторінку user-details.html
            // яка відображає повну інформацію по user, якого вибрали
            let a = document.createElement('a');
            a.href = 'user-details.html';
            button.textContent = `user-details`;
            p.textContent = `id: ${user.id}, name: "${user.name}"`;
            button.id = `button${user.id}`;
            // Добавлення тегів у батьківські елементи для їх відображення у відповідному порядку
            a.appendChild(button);
            div.append(p, a);
            divMain.appendChild(div);
        }
        document.body.appendChild(divMain);
        // Створення поведінки для кнопки/посилання кожному user
        for (let i = 1; i < users.length + 1; i++) {
            let button = `button${i}`;
            button = document.getElementById(`${button}`);
            button.addEventListener("click", function () {
                // Створення пам'яті для того, якого user треба вивести з повною інформацією
                localStorage.setItem('idUser', `${i}`);
            })
        }
    });



