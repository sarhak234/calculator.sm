let buttons = document.querySelectorAll('button');
let str = '';

buttons.forEach(button => {
    button.addEventListener('click', el => {
        const buttonText = el.target.innerHTML;

        if (/[\d\+\-\*\/\.]/.test(buttonText)) {
            str += buttonText;
            document.getElementById('inp').value = str;
        } else if (buttonText === '=') {
            str = eval(str);
            document.getElementById('inp').value = str;
        } else if (buttonText === 'AC') {
            str = '';
            document.getElementById('inp').value = str;
        } else if (buttonText === 'DEL') {
            str = str.substring(0, str.length - 1);
            document.getElementById('inp').value = str;
        }
    });
});

