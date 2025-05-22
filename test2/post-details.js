// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let postUserId = +localStorage.getItem('idPost');
fetch(`https://jsonplaceholder.typicode.com/posts/${postUserId}`)
    .then((asd) => asd.json())
    .then((post) => {
        let div = document.createElement('div');
        div.id = 'oneUserPost';
        let h3 = document.createElement('h3');
        h3.innerHTML = `Information of post`;
        document.body.append(h3);
        let pre = document.createElement('pre');
        pre.id = 'containPost';
        div.append(pre);
        document.body.append(div);
        document.getElementById('containPost').textContent = JSON.stringify(post, null, 2);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postUserId}/comments`)
            .then((asd) => asd.json())
            .then((comments) => {
                let divComment = document.createElement('div');
                divComment.id = 'commentMainDiv';
                for (let comment of comments) {
                    let div = document.createElement('div');
                    div.id = 'commentPost';
                    let p = document.createElement('p');
                    p.innerHTML = comment.body;
                    div.append(p);
                    divComment.append(div)
                }
                document.body.append(divComment);
            })
    })