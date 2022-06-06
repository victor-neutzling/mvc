class AgeHelper{
    constructor(){
        throw new Error("the AgeHelper class should not be instantiated");
    }
    static getBirthday(){
        let day = document.querySelector('#day')
        let month = document.querySelector('#month')
        let year = document.querySelector('#year')

        let currentDate = (new Date()).getFullYear(); //gets current year
        let bd;

        if(month.value > (new Date()).getMonth()+1){
            console.log("entrou 1")
            bd = currentDate - year.value-1
        }else if(month.value < (new Date()).getMonth()+1){
            console.log("entrou 2")
            bd = currentDate - year.value
        }else{//se for igual
            if(day.value >= (new Date().getDate())){
                console.log("entrou 3")
                bd = currentDate - year.value-1
            }else{
                console.log("entrou 4")
                bd = currentDate - year.value
            }
        }
        document.querySelector('#tb-age').value = bd;

    }
}