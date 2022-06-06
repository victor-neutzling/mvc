class DateHelper{
    constructor(){ 
        throw new Error('DateHelper can\'t be instanciated');  
    }
    
    static addDate(){
        let day = document.querySelector('#day');
        let month = document.querySelector('#month')
        let year = document.querySelector('#year')
        for(let i = 1; i <= 12; i++){
            
            if(i=1){
                month.innerHTML += `<option value="${i}">january</option>`
            }if(i=2){
                month.innerHTML += `<option value="${i}">february</option>`
            }
            if(i=3){
                month.innerHTML += `<option value="${i}">march</option>`
            }
            if(i=4){
                month.innerHTML += `<option value="${i}">april</option>`
            }
            if(i=5){
                month.innerHTML += `<option value="${i}">may</option>`
            }
            if(i=6){
                month.innerHTML += `<option value="${i}">june</option>`
            }
            if(i=7){
                month.innerHTML += `<option value="${i}">july</option>`
            }
            if(i=8){
                month.innerHTML += `<option value="${i}">august</option>`
            }
            if(i=9){
                month.innerHTML += `<option value="${i}">sptember</option>`
            }
            if(i=10){
                month.innerHTML += `<option value="${i}">october</option>`
            }
            if(i=11){
                month.innerHTML += `<option value="${i}">november</option>`
            }
            if(i=12){
                month.innerHTML += `<option value="${i}">december</option>`
            }
        }
        for(let i = 1; i <= 31; i++){
            day.innerHTML += `<option value="${i}">${i}</option>`;
        }
        for(let i = 122; i >= 0; i--){
            year.innerHTML +=`<option value="${i+1900}">${i+1900}</option>`
        }
    }
    static addDays(days){
        let day = document.querySelector('#day');
        let month31 = [1,3,5,7,8,10,12]
        let month30 = [4,6,9,11]
        if(month31.includes(parseInt(month.options[month.selectedIndex].text))){
            day.innerHTML = '';
            for(let i = 1; i <= 31; i++){
                day.innerHTML += `<option>${i}</option>`;
            }
        }else if(month30.includes(parseInt(month.options[month.selectedIndex].text))){
            day.innerHTML = '';
            for(let i = 1; i <= 30; i++){
                day.innerHTML += `<option>${i}</option>`;
            }
        }else{
            day.innerHTML = '';
            for(let i = 1; i <= 28; i++){
                day.innerHTML += `<option>${i}</option>`;
            }
        }
    }
    static checkLeapYear(){
        let day = document.querySelector('#day');
        let month = document.querySelector('#month');
        let year = document.querySelector('#year');
        if(parseInt(year.options[year.selectedIndex].text) % 4 == 0 && !(parseInt(year.options[year.selectedIndex].text) % 100 == 0)){
            if(parseInt(month.options[month.selectedIndex].text)== 2){
                day.innerHTML = '';
                for(let i = 1; i <= 29; i++){
                    day.innerHTML += `<option>${i}</option>`;
                }
            } 
        }
        if(parseInt(year.options[year.selectedIndex].text) % 400 == 0&&(parseInt(year.options[year.selectedIndex].text) % 100 == 0)){
            console.log(1234)
            if(parseInt(month.options[month.selectedIndex].text)== 2){
                day.innerHTML = '';
                for(let i = 1; i <= 28; i++){
                    day.innerHTML += `<option>${i}</option>`;
                }
            }
        }

    }
}