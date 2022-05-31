class Validator {

    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            // 'data-birth-date',
        ]
    }

    // iniciar a validação de todos os campos 
    validate(form) {

        // resgata todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        // transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {

            // loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++) {
                //varifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {

                    // limpando a string para virar um método
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    // valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // invocar o método
                    this[method](input, value);

                }
            }
        }, this);

    }

    // verifica se um input tem um número mínimo de caracteres
    minlength(input, minValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // verifica se um input passou do limite de caracteres
    maxlength(input, maxValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if(inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // valida emails
    emailvalidate(input) {

        // utilização do REGEX
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = `Insira um e-mail no padrão foo@bar.com`;

        if(!re.test(email)) {
            this.printMessage(input, errorMessage);
        }
    }

    // valida se o campo tem apenas letras
    onlyletters(input) {

        let re = /^[A-Za-z]+$/;

        let inputValue = input.value;

        let errorMessage = `Este campo não aceita número nem caracteres especiais`;

        if(!re.test(inputValue)) {
            this.printMessage(input, errorMessage);
        }
    }


    // birthdate(input) {
    //     if(input == Validator) {
    //         let today = new Date();
    //         let birthdate = new Date(birthdate.value);

    //         let age = today.getFullYear() - birthdate.getFullYear();
    //         let month = today.getMonth() - birthdate.getMonth();
    //         if(month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    //             age--;
    //         }

    //         if(age >= 0) document.getElementById('age').value = age + 'years';
    //         else document.getElementById('age').value = "Ainda não nascido";
    //     }
    // }


    // método para imprimir mensagens de erro na tela
    printMessage(input, msg) {

        // quantidade de erros
        let errorsQty = input.parentNode.querySelector('.error-validation');

        if(errorsQty === null) {
            let template  = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg; 
    
            let inputParent = input.parentNode;
    
            template.classList.remove('template');
    
            inputParent.appendChild(template);
        }

    }

    // verifica se o input é requerido
    required(input) {

        let inputValue = input.value;

        if(inputValue == '') {
            let errorMessage = 'Este campo é obrigatório';

            this.printMessage(input, errorMessage);
        }
    }

    // limpa as validações da tela
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }

}


let form = document.getElementById("register-form"); 
let button = document.getElementById("btn-button");

let validator = new Validator();

// evento que dispara as validações
button.addEventListener('click', function(e){

    e.preventDefault();

    validator.validate(form); 

});

