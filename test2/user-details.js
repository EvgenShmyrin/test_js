// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


let oneUser = +localStorage.getItem('idUser');
fetch(`https://jsonplaceholder.typicode.com/users/${oneUser}`)
    .then((asd) => asd.json())
    .then((users) => {
        let div = document.createElement('div');
        div.id = 'oneUser';
        let h3 = document.createElement('h3');
        h3.textContent = 'Information of user';
        let pre = document.createElement('pre');
        pre.id = 'contain';
        let button = document.createElement('button');
        button.innerText = 'post of current user'
        button.id = 'buttonUser';
        div.append(h3, pre, button);
        document.body.append(div);
        document.getElementById('contain').textContent = JSON.stringify(users, null, 2);
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${oneUser}/posts`)
                .then((asd) => asd.json())
                .then((userPost) => {
                    let divUserMain = document.createElement('div');
                    divUserMain.id = 'divUserMain';
                    let divUser = document.createElement('div');
                    divUser.id = 'containUser';
                    for (let post of userPost) {
                        let div = document.createElement('div');
                        div.id = 'containPost';
                        let p = document.createElement('p');
                        p.innerHTML = post.title;
                        let a = document.createElement('a');
                        a.href = `post-details.html`;
                        let button = document.createElement('button');
                        button.innerHTML = 'post-details'
                        button.id = 'buttonUser';
                        a.appendChild(button);
                        div.append(p, a);
                        divUser.append(div);
                        divUserMain.append(divUser);
                        button.onclick = function () {
                            localStorage.setItem('idPost', `${post.id}`);
                        }
                    }
                    ;document.body.append(divUserMain);
                });

        };
    });
