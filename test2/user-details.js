// Створення змінної для id user, інформацію якого треба вивести
let oneUser = +localStorage.getItem('idUser');
// Отримання масиву з інформацією по необхідному user, та виведення інформації про нього
fetch(`https://jsonplaceholder.typicode.com/users/${oneUser}`)
    .then((asd) => asd.json())
    .then((users) => {
        // створення обгортки div для виведення 'Information of user' на сторінці user-details.html
        let div = document.createElement('div');
        div.id = 'oneUser';
        // Створення тегів h3, рre та кнопки для дії з користувачем, а також їх назв
        let h3 = document.createElement('h3');
        h3.textContent = 'Information of user';
        let pre = document.createElement('pre');
        pre.id = 'contain';
        let button = document.createElement('button');
        button.innerText = 'post of current user'
        button.id = 'buttonUser';
        // Добавлення тегів у батьківські елементи для їх відображення у відповідному порядку
        div.append(h3, pre, button);
        document.body.append(div);
        document.getElementById('contain').textContent = JSON.stringify(users, null, 2);
        // Створення поведінки для кнопки, яка відображає title всіх постів поточного user
        button.onclick = function () {
            // Отримання інформації з эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts
            fetch(`https://jsonplaceholder.typicode.com/users/${oneUser}/posts`)
                .then((asd) => asd.json())
                .then((userPost) => {
                    // створення обгортки divUserMain для виведення title нижче 'Information of user' та кнопці
                    // на сторінці user-details.html
                    let divUserMain = document.createElement('div');
                    divUserMain.id = 'divUserMain';
                    let divUser = document.createElement('div');
                    divUser.id = 'containUser';
                    // Створення всіх елементів title через ітерацію
                    for (let post of userPost) {
                        // створення обгортки div
                        let div = document.createElement('div');
                        div.id = 'containPost';
                        // Створення тега р, та тега а для посилання, яка переводить на сторінку post-details.html
                        // котра має детальну інфу про поточний пост
                        let p = document.createElement('p');
                        p.innerHTML = post.title;
                        let a = document.createElement('a');
                        a.href = `post-details.html`;
                        // СТворення самої кнопки та її назви
                        let button = document.createElement('button');
                        button.innerHTML = 'post-details'
                        button.id = 'buttonUser';
                        // Добавлення тегів у батьківські елементи для їх відображення у відповідному порядку
                        a.appendChild(button);
                        div.append(p, a);
                        divUser.append(div);
                        divUserMain.append(divUser);
                        // Створення поведінки для кнопки/посилання
                        button.onclick = function () {
                            // Створення пам'яті для того, щоб знати який пост треба подивитись
                            localStorage.setItem('idPost', `${post.id}`);
                        }
                    }
                    ;document.body.append(divUserMain);
                });

        };
    });
