// Створення змінної для id user, інформацію якого треба вивести
let postUserId = +localStorage.getItem('idPost');
// Отримання інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
fetch(`https://jsonplaceholder.typicode.com/posts/${postUserId}`)
    .then((asd) => asd.json())
    .then((post) => {
        // створення обгортки div для виведення `Information of post` на сторінці post-details.html
        let div = document.createElement('div');
        div.id = 'oneUserPost';
        // Створення тегів h3, рre, а також їх назв
        let h3 = document.createElement('h3');
        h3.innerHTML = `Information of post`;
        document.body.append(h3);
        let pre = document.createElement('pre');
        pre.id = 'containPost';
        // Добавлення тегів у батьківські елементи для їх відображення у відповідному порядку
        div.append(pre);
        document.body.append(div);
        document.getElementById('containPost').textContent = JSON.stringify(post, null, 2);
        // ОТримання коментарів по данному посту
        fetch(`https://jsonplaceholder.typicode.com/posts/${postUserId}/comments`)
            .then((asd) => asd.json())
            .then((comments) => {
                // створення обгортки divComment для виведення нижче `Information of post` на сторінці post-details.html
                let divComment = document.createElement('div');
                divComment.id = 'commentMainDiv';
                // Створення всіх елементів comment через ітерацію
                for (let comment of comments) {
                    // створення обгортки div для їх виведення
                    let div = document.createElement('div');
                    div.id = 'commentPost';
                    // Створення тега р
                    let p = document.createElement('p');
                    p.innerHTML = comment.body;
                    // Добавлення тегів у батьківські елементи для їх відображення у відповідному порядку
                    div.append(p);
                    divComment.append(div)
                }
                document.body.append(divComment);
            })
    })