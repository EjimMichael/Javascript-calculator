let display = document.getElementById("display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'Del':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch (err) {
                    alert('Invalid input');
                }
                break;
            default:
            display.innerText += e.target.innerText;
        } 

        // display.innerText += e.target.innerText;
    });
});
