// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку, при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => {
        let divMain = document.createElement('div');
        divMain.classList.add('usersDiv');
        for (let user of users) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let button = document.createElement('button');
            let a = document.createElement('a');
            a.href = 'user-details.html';
            button.textContent = `user-details`;
            p.textContent = `id: ${user.id}, name: "${user.name}"`;
            button.id = `button${user.id}`;
            a.appendChild(button);
            div.append(p, a);
            divMain.appendChild(div);
        }
        document.body.appendChild(divMain);
        for (let i = 1; i < users.length + 1; i++) {
            let button = `button${i}`;
            button = document.getElementById(`${button}`);
            button.addEventListener("click", function () {
                localStorage.setItem('idUser', `${i}`);
            })
        }
    });



