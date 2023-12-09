
let mobile_menu = document.querySelector('.mobile_menu');
let main_menu = document.querySelector('.main_menu');
mobile_menu.onclick = function() {
    main_menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}

function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {

            parent.querySelector('.error_label').remove()
            parent.classList.remove('error')
        }
    }
    
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error_label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }
    
    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input)

        if (input.value == "") {
            createError(input, 'Поле не заполнено!')
            result = false;
        }
    }

    return result
}

document.getElementById('add_form').addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Отправлено （づ￣3￣）づ╭❤️～')
    }
})