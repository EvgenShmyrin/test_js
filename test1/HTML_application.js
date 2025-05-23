let input = document.forms['myForm'].input
let inputButton = document.getElementById('inputButton')
let monitor = document.getElementById('monitor');
let arrTest = []
let reverseArrTest = []


inputButton.addEventListener("click", function (event) {
    event.preventDefault();
    let text = input.value;
    let match = text.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/);
    let p = document.createElement('p');
    let oneArr = {
        name: match[1],
        value: match[2],
    };
    reverseArrTest.push(oneArr);
    arrTest = reverseArrTest.reverse();
    // console.log(oneArr)
    console.log(arrTest)
    monitor.innerText = '';
    for (let el of arrTest) {
        console.log(el)
        console.log(`${el.name}=${el.value}`)
        let p = document.createElement('p');
        p.textContent = `${el.name}=${el.value}`;
        monitor.appendChild(p);
    }
})
let button1 = document.getElementById('button1');
button1.addEventListener("click", function (event) {
    event.preventDefault();
    let button1p = document.createElement('p');
    button1p.id = 'button1p';
    let sort = arrTest.sort(function (a, b) {
        return a.name - b.name;
    })
    monitor.innerText = '';
    monitor.append(button1p);
    for (let el of sort) {
        let button1p = document.createElement('p');
        button1p.textContent = `${el.name}=${el.value}`;
        monitor.appendChild(button1p);
    }
    console.log(sort)
})
let button2 = document.getElementById('button2');
button2.addEventListener("click", function (event) {
    event.preventDefault();
    let button2p = document.createElement('p');
    let sort = arrTest.sort(function (a, b) {
        // console.log(a.name, b.name);
        return a.value - b.value;
    })
    monitor.innerText = '';
    monitor.append(button2p);
    for (let el of sort) {

        button2p.innerText = `${el.name}=${el.value}`;
        monitor.append(button2p);
    }
    console.log(sort)
})
let button3 = document.getElementById('button3');
button3.addEventListener("click", function (event) {
    // event.preventDefault();
    let button3p = document.createElement('p');
    button3p.id = 'button3p';
    monitor.innerText = '';
    monitor.append(button3p);

})