let input = document.forms['myForm'].input
let inputButton = document.getElementById('inputButton')
let monitor = document.getElementById('monitor');
inputButton.addEventListener("click", function (event) {
    event.preventDefault();
    let text = input.value;
    let match = text.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/);
    // console.log(match);

    // console.log(match[0]);
    if (match === 0) {
        monitor.append(`Помилка`);

    }else {
        monitor.append(match[0]);
    }
})
